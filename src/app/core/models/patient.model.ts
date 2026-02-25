export interface PatientModel {
    id: number;
    numero: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse: string;
    antecedents: string;
}

//Omit permet de créer un type qui contient toutes les propriétés de PatientModel sauf 'id',
//  ce qui est utile pour les requêtes de création ou de mise à jour où l'id est généré automatiquement par le backend.

//Pick permet de créer un type qui ne contient que les propriétés spécifiées, 
// ce qui est utile pour les requêtes de mise à jour partielle (PATCH).
//export type PatientUpdateRequest = Pick<PatientModel, 'numero' | 'nom' | 'prenom' | 'telephone' | 'adresse' | 'antecedents'>;

//Required permet de rendre toutes les propriétés d'un type obligatoires,
// ce qui est utile pour les requêtes de création où toutes les informations sont nécessaires.
//export type PatientCreateRequest = Required<PatientModel>;

//Partial permet de rendre toutes les propriétés d'un type optionnelles,
// ce qui est utile pour les requêtes de mise à jour partielle (PATCH) où seules certaines informations peuvent être mises à jour.
//export type PatientPartialUpdateRequest = Partial<PatientModel>;

export type PatientRequest = Omit<PatientModel, 'id'>;