import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListResponseModel, DemandeListRVModel, DemandeRVFilterModel } from '../../models/demande.models';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemandeMockService } from '../services/demande.mock.service';
import { Observable, Subscription } from 'rxjs';
import { DEMANDE_SERVICE_TOKEN, DemandeServiceInterface } from '../services/interfaces/demande.interface.service';
import { AlertComponent } from "../../../../shared/component/alert/alert.component";
import { BadgeComponent } from "../../../../shared/component/badge/badge.component";

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, AlertComponent, BadgeComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDemandeComponent implements OnInit,OnDestroy {
  public title: string = "Mes Demandes de RV";

  demandeResponse?: DemandeListResponseModel;
  subscription?:Subscription;

  filter:DemandeRVFilterModel = {
    specialite: '',
    statut: 'En Attente',
  }

  constructor(@Inject(DEMANDE_SERVICE_TOKEN) private demandeService: DemandeServiceInterface,private cdr: ChangeDetectorRef) { ///////////////// DemandeMockService
     // Remplacez par votre service réel pour récupérer les demandes
  }

  ngOnInit(): void {
    this.loadDemandes();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onTape($event: any) {
    this.title = $event.target.value;
  }

  private loadDemandes() {
    let demaandes$: Observable<DemandeListResponseModel> = this.demandeService.getDemandesRV(this.filter);
    demaandes$.subscribe({
      next: (data:DemandeListResponseModel) => {
        this.demandeResponse = data;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error("Erreur lors du chargement des demandes : ", err);
      },
      complete: () => {console.log("Chargement des demandes terminé.");
      }
    });
  }

  onFilterStatutAndSpecialiteChange() {
    this.loadDemandes();
  }

  onPageChange(page: number): void {
    this.filter.page = page;
    this.loadDemandes();
  }

  get desactivePrecedent(): boolean {
    return !(this.demandeResponse ? this.demandeResponse.currentPage > 1 : false);
  }

  get desactiveSuivant(): boolean {
    return !(this.demandeResponse ? this.demandeResponse.currentPage < this.demandeResponse.totalPages : false);
  }

}
