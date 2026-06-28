import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '@mocks';
import { DemandeListResponseModel, DemandeRVFilterModel } from '../../models/demande.models';
import { environment } from '../../../../../environments/environment.development';
import { delay, Observable, of } from 'rxjs';
import { DemandeServiceInterface } from './interfaces/demande.interface.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeMockService implements DemandeServiceInterface {

  constructor() { }

  public getDemandesRV(filter: DemandeRVFilterModel): Observable<DemandeListResponseModel> {
    

    let demandes = [...MOCK_DEMANDES];

    if(filter.statut) {
      demandes = demandes.filter(d => d.statut === filter.statut);
    }
    if(filter.specialite) {
      demandes = demandes.filter(d => d.specialite === filter.specialite);
    }

    const page = filter.page || 1;
    const size = filter.size || environment.limit || 5;

    const startIndex = (page - 1) * size;
    const endIndex = page * size;
    const totalPages = Math.ceil(demandes.length / size);
    // const pages: number[] = [];
    // for(let i = 1; i <= totalPages; i++) {
    //   pages.push(i);
    // }

    setTimeout(() => {
      console.log("Appel du Back End");
    }, 2000);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const demandesByPage = demandes.slice(startIndex, endIndex);

    return of ({
      data: demandesByPage,
      totalPages: totalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages: pages,
      size: size
    }).pipe(delay(2000));
  }
}
