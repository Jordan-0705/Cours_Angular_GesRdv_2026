import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DemandeListResponseModel, DemandeListRVModel, DemandeRVFilterModel } from '../../models/demande.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { DEMANDE_SERVICE_TOKEN, DemandeServiceInterface } from '../services/interfaces/demande.interface.service';
import { AlertComponent } from "../../../../shared/component/alert/alert.component";
import { BadgeComponent } from "../../../../shared/component/badge/badge.component";
import { PaginationComponent } from '../../../../shared/component/pagination/pagination.component';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, AlertComponent, BadgeComponent, PaginationComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDemandeComponent implements OnInit, OnDestroy {
  public title: string = "Mes Demandes de RV";

  demandeResponse?: DemandeListResponseModel;
  subscription?: Subscription;
  isLoading: boolean = false;

  filter: DemandeRVFilterModel = {
    specialite: '',
    statut: '',
    page: 1 // Initialiser la page à 1
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    @Inject(DEMANDE_SERVICE_TOKEN) private demandeService: DemandeServiceInterface // Injecter le service
  ) { }

  ngOnInit(): void {
    // Utiliser les données du resolver pour le chargement initial
    this.route.data.subscribe({
      next: (data) => {
        this.demandeResponse = data['demandes'] as DemandeListResponseModel;
        console.log('Données initiales du resolver:', this.demandeResponse);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.log('Erreur resolver:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onTape($event: any) {
    this.title = $event.target.value;
  }

  // Méthode pour charger les données avec les filtres actuels
  private loadDemandesWithFilters(): void {
    this.isLoading = true;
    this.subscription?.unsubscribe(); // Annuler la souscription précédente
    
    this.subscription = this.demandeService.getDemandesRV(this.filter).subscribe({
      next: (response) => {
        this.demandeResponse = response;
        console.log('Données avec filtres:', this.filter, response);
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.log('Erreur lors du chargement:', error);
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }

  // Quand un filtre change
  onFilterStatutAndSpecialiteChange(): void {
    this.filter.page = 1; // Réinitialiser à la page 1 quand les filtres changent
    this.loadDemandesWithFilters();
  }

  // Quand la page change
  onPageChange(page: number): void {
    this.filter.page = page;
    this.loadDemandesWithFilters();
  }

  // Méthode pour réinitialiser les filtres
  resetFilters(): void {
    this.filter = {
      specialite: '',
      statut: '',
      page: 1
    };
    this.loadDemandesWithFilters();
  }
}