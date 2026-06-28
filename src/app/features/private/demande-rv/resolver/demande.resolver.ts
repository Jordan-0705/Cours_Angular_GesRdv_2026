import { ResolveFn } from '@angular/router';
import { DemandeListResponseModel, DemandeRVFilterModel } from '../../models/demande.models';
import { Observable } from 'rxjs';
import { DEMANDE_SERVICE_TOKEN, DemandeServiceInterface } from '../services/interfaces/demande.interface.service';
import { inject } from '@angular/core';

export const demandeResolver: ResolveFn<DemandeListResponseModel | undefined> = (route, state) => {
  
  const demandeService = inject(DEMANDE_SERVICE_TOKEN) as DemandeServiceInterface;

  const filter:DemandeRVFilterModel = {
    specialite: '',
    statut: '',
  }

  // let demandeResponse: DemandeListResponseModel | undefined = undefined;
  return demandeService.getDemandesRV(filter);
        
};
