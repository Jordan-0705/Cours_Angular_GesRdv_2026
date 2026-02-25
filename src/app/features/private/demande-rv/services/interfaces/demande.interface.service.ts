import { Observable } from "rxjs";
import { DemandeListResponseModel, DemandeRVFilterModel } from "../../../models/demande.models";

export interface DemandeServiceInterface {
    getDemandesRV(filter: DemandeRVFilterModel): Observable<DemandeListResponseModel>;
}