// class DemandeRV {
//     constructor(
//         public id: number,
//         public dateDemande: Date,
//         public statut: string,
//         public heure: string
//     ) {}
// }

// const demande1 = new DemandeRV(1, new Date('2024-06-01'), 'En attente', '10:00');

// class DemandeRVV2 {
//     id: number;
//     dateDemande: Date;
//     statut: string;
//     heure: string;

//     constructor(id: number, dateDemande: Date, statut: string, heure: string) {
//         this.id = id;
//         this.dateDemande = dateDemande;
//         this.statut = statut;
//         this.heure = heure;
//     }
// }

// export enum SpecialiteModel {
//     CARDIOLOGIE = 'Cardiologie',
//     DERMATOLOGIE = 'Dermatologie',
//     PEDIATRIE = 'Pédiatrie',
//     ORTHOPEDIE = 'Orthopédie',
//     GYNECOLOGIE = 'Gynécologie'
// }

// export enum StatutDemandeModel {
//     EN_ATTENTE = 'En attente',
//     ACCPEPTEE = 'Accpetée',
//     REFUSEE = 'Refusée'
// }

export type SpecialiteModel = 'Cardiologie' | 'Dermatologie' | 'Pédiatrie' | 'Orthopédie' | 'Gynécologie';

export type StatutDemandeModel = 'En Attente' | 'Acceptée' | 'Refusée';

export interface DemandeListRVModel {
    id: number;
    dateDemande: string;
    statut: StatutDemandeModel;
    heure: string;
    specialite: SpecialiteModel;
}

// const demande2: DemanandeRVInterface = {
//     id: 2,
//     dateDemande: new Date('2024-06-02'),
//     statut: 'Confirmée',
//     heure: '14:00'
// };

export interface DemandeRVFilterModel {
    specialite?: SpecialiteModel|'';
    statut?: StatutDemandeModel;
    page?: number;
    size?: number;
}

export interface DemandeListResponseModel {
    data: DemandeListRVModel[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
    pages: number[];
    size: number;
}