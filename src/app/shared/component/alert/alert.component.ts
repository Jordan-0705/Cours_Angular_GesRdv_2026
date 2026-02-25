import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alert',
  imports: [RouterLink],
  template: `
    <div class="alert alert-{{type}} text-center p-4" role="alert">
      <i class="bi bi-calendar-x display-4 d-block mb-3"></i>
      <h5 class="alert-heading fw-bold mb-3">{{message}}</h5>
      <p class="mb-3">Vous n'avez pas encore fait de demande de rendez-vous. Cliquez sur "Nouvelle Demande" pour en créer une.</p>
      <a routerLink="/private/create-demande" class="btn btn-primary btn-sm">
        <i class="bi bi-plus-circle me-1"></i>
        Nouvelle Demande
      </a>
    </div>
  `,
})
export class AlertComponent {
  @Input({required:true}) message: string = '';
  @Input() type: 'info' | 'success' | 'warning' | 'danger' = 'info';
}
