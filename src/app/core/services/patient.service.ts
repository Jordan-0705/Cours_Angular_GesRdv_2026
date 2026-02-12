import { Injectable } from '@angular/core';
import { PatientRequest } from '../models/patient.model';
import { MOCK_PATIENTS } from '@mocks';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  createPatient(patientData: PatientRequest): void {
    const newPatient = {
      id: Math.floor(Math.random() * 10000), // Générer un ID aléatoire pour l'exemple
      ...patientData
    };  
    MOCK_PATIENTS.push(newPatient);

    console.log("Patient créé avec succès:", patientData);
  }
}
