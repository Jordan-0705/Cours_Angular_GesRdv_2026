import { Observable } from "rxjs";
import { DemandeListResponseModel, DemandeRVFilterModel } from "../../../models/demande.models";
import { InjectionToken } from "@angular/core";

export interface DemandeServiceInterface {
    getDemandesRV(filter: DemandeRVFilterModel): Observable<DemandeListResponseModel>;
}

export const DEMANDE_SERVICE_TOKEN = new InjectionToken<DemandeServiceInterface>('DemandeServiceInterface');