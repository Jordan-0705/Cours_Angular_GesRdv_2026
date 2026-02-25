import { Routes } from '@angular/router';
import { isConnectGuard } from './core/guards/is-connect.guard';


export const routes: Routes = [
  
  // Routes privées
  {
    path: 'private',
    canActivate: [isConnectGuard],
    loadChildren: () => import('./features/private/private.route').then(m => m.PRIVATE_ROUTES),
  },

  // Routes publiques
  {
    path: 'public',
    loadChildren: () => import('./features/public/public.routes').then(m => m.PUBLIC_ROUTES),
  },
  
  
  {path: '', redirectTo: '/public', pathMatch: 'full'},
  {path: '**', redirectTo: '/public/login', pathMatch: 'full'},
 
];
