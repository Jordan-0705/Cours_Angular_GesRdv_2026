import { PatientModel } from "../core/models/patient.model";
import { User } from "../core/models/user.model";

export const MOCK_PATIENTS: PatientModel[] = [
    {
        id: 1,
        numero: '001',
        nom: 'Doe',
        prenom: 'John',
        telephone: '1234567890',
        adresse: '123 Main St, Anytown',
        antecedents: 'Diabète, Hypertension'
    },
    {
        id: 2,
        numero: '002',
        nom: 'Smith',
        prenom: 'Jane',
        telephone: '0987654321',
        adresse: '456 Elm St, Othertown',
        antecedents: 'Asthme'
    },
    {
        id: 3,
        numero: '003',
        nom: 'Brown',
        prenom: 'Charlie',
        telephone: '5555555555',
        adresse: '789 Oak St, Sometown',
        antecedents: 'Aucun'
    },
    {
        id: 4,
        numero: '004',
        nom: 'Johnson',
        prenom: 'Emily',
        telephone: '1112223333',
        adresse: '321 Pine St, Anycity',
        antecedents: 'Allergies alimentaires'
    }
];