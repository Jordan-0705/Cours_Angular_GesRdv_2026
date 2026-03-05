import { Routes } from "@angular/router";
import { isConnectGuard } from "../../core/guards/is-connect.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormDemandeComponent } from "./demande-rv/form-demande/form-demande.component";
import { ListDemandeComponent } from "./demande-rv/list-demande/list-demande.component";
import { PrivateComponent } from "./private.component";
import { demandeResolver } from "./demande-rv/resolver/demande.resolver";

export const PRIVATE_ROUTES: Routes = [
  
  // Routes privées
  {
    path: '',
    component: PrivateComponent,
    canActivateChild: [isConnectGuard],
    children: [
      {path: '', redirectTo: 'dash', pathMatch: 'full'},
      {
        path:"dash",
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path:"create-demande",
        loadComponent: () => import('./demande-rv/form-demande/form-demande.component').then(m => m.FormDemandeComponent)
      },
      {
        path:"list-demande-rv",
        loadComponent: () => import('./demande-rv/list-demande/list-demande.component').then(m => m.ListDemandeComponent),
        resolve: {
          demandes: demandeResolver
        }
      },
    ]
  }
];