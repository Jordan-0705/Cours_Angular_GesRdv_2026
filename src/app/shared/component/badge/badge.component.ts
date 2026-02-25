import { Component, Input } from '@angular/core';
import { DemandeListRVModel, StatutDemandeModel } from '../../../features/private/models/demande.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="statut">
      <span *ngSwitchCase="'Acceptée'" class="badge bg-success"><i class="bi bi-check-circle"></i> Acceptée</span>
      <span *ngSwitchCase="'En Attente'" class="badge bg-warning"><i class="bi bi-clock"></i> En Attente</span>
      <span *ngSwitchCase="'Refusée'" class="badge bg-danger"><i class="bi bi-x-circle"></i> Refusée</span>
      <span *ngSwitchDefault class="badge bg-secondary"><i class="bi bi-question-circle"></i> Inconnu</span>
  </ng-container>
    `,
})
export class BadgeComponent {
  @Input() statut: StatutDemandeModel = 'En Attente';
}
