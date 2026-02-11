import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListResponseModel, DemandeListRVModel, DemandeRVFilterModel } from '../../models/demande.models';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent {
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

  onTape($event: any) {
    this.title = $event.target.value;
  }

  private loadDemandes() {
      this.demandeResponse = this.demandeService.getDemandesRV(this.filter);
  }

  onFilterStatutChange() {
    this.loadDemandes();
  }

  onFilterSpecialiteChange() {
    this.loadDemandes();
  }
}
