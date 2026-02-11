import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListResponseModel, DemandeListRVModel, DemandeRVFilterModel } from '../../models/demande.models';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit,OnDestroy {
  public title: string = "Mes Demandes de RV";

  demandeResponse?: DemandeListResponseModel;
  filter:DemandeRVFilterModel = {
    specialite: '',
    statut: 'En Attente',
  }

  constructor(private demandeService: DemandeService) {
     // Remplacez par votre service réel pour récupérer les demandes
  }

  ngOnInit(): void {
    this.loadDemandes();
  }

  ngOnDestroy(): void {
    alert("ListDemandeComponent destroyed");
  }

  onTape($event: any) {
    this.title = $event.target.value;
  }

  private loadDemandes() {
      this.demandeResponse = this.demandeService.getDemandesRV(this.filter);
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
