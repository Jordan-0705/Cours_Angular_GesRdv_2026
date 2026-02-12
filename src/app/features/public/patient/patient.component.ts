import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientRequest } from '../../../core/models/patient.model';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../../core/services/patient.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patientForm: FormGroup;
  messageSucccess: string = '';

  submitted: boolean = false;
    constructor(private fb: FormBuilder,private patientService: PatientService) {
      this.patientForm = this.fb.group({
        numero: new FormControl('', [Validators.required, Validators.minLength(5)]),
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        adresse: ['', [Validators.required]],
        telephone: ['', [Validators.required]],
        antecedents: ['']
      });
    }
  
  get f() {return this.patientForm.controls;} 

  onSubmit(): void {
    if(this.patientForm.valid) {
      this.submitted = true;
      const patientData: PatientRequest = this.patientForm.value;
      this.patientService.createPatient(patientData);
      this.messageSucccess = "Patient créé avec succès !";
    }
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.f[fieldName];
    return !!(field && field.invalid && (field.dirty || field.touched));
  } 

  onReset(): void {
    this.messageSucccess = '';
    this.patientForm.reset();
  }
}
