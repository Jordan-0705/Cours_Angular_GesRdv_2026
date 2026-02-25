import { Routes } from "@angular/router";
import { PublicComponent } from "./public.component";

export const PUBLIC_ROUTES: Routes = [
  
  // Routes publiques
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path:"login",
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
      },
      {
        path:"create-patient",
        loadComponent: () => import('./patient/patient.component').then(m => m.PatientComponent)
      },
    ]
  },
];