import { Routes } from '@angular/router';
import { DashboardComponent } from './features/private/dashboard/dashboard.component';
import { FormDemandeComponent } from './features/private/demande-rv/form-demande/form-demande.component';
import { ListDemandeComponent } from './features/private/demande-rv/list-demande/list-demande.component';
import { LoginComponent } from './features/public/login/login.component';
import { PatientComponent } from './features/public/patient/patient.component';
import { PublicComponent } from './features/public/public.component';
import { PrivateComponent } from './features/private/private.component';
import { isConnectGuard } from './core/guards/is-connect.guard';


export const routes: Routes = [
  
  // Routes privées
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [isConnectGuard],
    canActivateChild: [isConnectGuard],
    children: [
      {path: '', redirectTo: 'dash', pathMatch: 'full'},
      {
        path:"dash",
        component: DashboardComponent
      },
      {
        path:"create-demande",
        component: FormDemandeComponent
      },
      {
        path:"list-demande-rv",
        component: ListDemandeComponent
      },
    ]
  },
  
  // Routes publiques
  {
    path: 'public',
    component: PublicComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path:"login",
        component: LoginComponent
      },
      {
        path:"create-patient",
        component: PatientComponent
      },
    ]
  },
  
  {path: '', redirectTo: '/public', pathMatch: 'full'},
  {path: '**', redirectTo: '/public/login', pathMatch: 'full'},
 
];
