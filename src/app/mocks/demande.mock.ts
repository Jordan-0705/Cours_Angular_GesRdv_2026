import { DemandeListRVModel } from "../features/private/models/demande.models";


export const MOCK_DEMANDES:DemandeListRVModel[] = [
    {
        id: 1,
        dateDemande: '2024-07-01',
        heure: '10:00',
        statut: "En Attente",
        specialite: "Cardiologie"
    },
    {
        id: 2,
        dateDemande: '2024-07-05',
        heure: '14:00',
        statut: "Acceptée",
        specialite: "Dermatologie"
    },
    {
        id: 3,
        dateDemande: '2024-07-10',
        heure: '09:00',
        statut: "Refusée",
        specialite: "Pédiatrie"
    },
    {
        id: 4,
        dateDemande: '2024-07-15',
        heure: '11:00',
        statut: "En Attente",
        specialite: "Orthopédie"
    },
    {
        id: 5,
        dateDemande: '2024-07-20',
        heure: '16:00',
        statut: "Acceptée",
        specialite: "Gynécologie"
    },
    {
        id: 6,
        dateDemande: '2024-07-25',
        heure: '13:00',
        statut: "Refusée",
        specialite: "Cardiologie"
    }
]