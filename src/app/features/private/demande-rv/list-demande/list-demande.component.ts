import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DemandeListResponseModel, DemandeListRVModel, DemandeRVFilterModel } from '../../models/demande.models';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemandeMockService } from '../services/demande.mock.service';
import { Observable, Subscription } from 'rxjs';
import { DEMANDE_SERVICE_TOKEN, DemandeServiceInterface } from '../services/interfaces/demande.interface.service';
import { AlertComponent } from "../../../../shared/component/alert/alert.component";
import { BadgeComponent } from "../../../../shared/component/badge/badge.component";
import { PaginationComponent } from '../../../../shared/component/pagination/pagination.component';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, AlertComponent, BadgeComponent,PaginationComponent],
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

  constructor(private cdr: ChangeDetectorRef,
              private route: ActivatedRoute) 
  { ///////////////// DemandeMockService
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

  private loadDemandes(): void {
    this.subscription = this.route.data.subscribe({
      next:(data)=>{
        this.demandeResponse = data['demandes'] as DemandeListResponseModel;
        console.log(this.demandeResponse);
        this.cdr.markForCheck();
      },
      error:(error)=>{
        console.log(error);
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
  
  

  // get desactivePrecedent(): boolean {
  //   return !(this.demandeResponse ? this.demandeResponse.currentPage > 1 : false);
  // }

  // get desactiveSuivant(): boolean {
  //   return !(this.demandeResponse ? this.demandeResponse.currentPage < this.demandeResponse.totalPages : false);
  // }

}
