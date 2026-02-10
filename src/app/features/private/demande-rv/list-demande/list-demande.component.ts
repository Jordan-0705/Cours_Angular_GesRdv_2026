import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemanandeListRVModel, SpecialiteModel, StatutDemandeModel } from '../../models/demande.models';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent {
  public title: string = "Mes Demandes de RV";

  demandes: DemanandeListRVModel[] = [
    { id: 1, dateDemande: '2024-07-01', heure: '10:00', statut: StatutDemandeModel.EN_ATTENTE, specialite: SpecialiteModel.CARDIOLOGIE },
    { id: 2, dateDemande: '2024-07-05', heure: '14:00', statut: StatutDemandeModel.ACCPEPTEE, specialite: SpecialiteModel.DERMATOLOGIE },
    { id: 3, dateDemande: '2024-07-10', heure: '09:00', statut: StatutDemandeModel.REFUSEE, specialite: SpecialiteModel.PEDIATRIE }
  ];
}
