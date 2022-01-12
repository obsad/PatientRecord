import { Component, OnDestroy, OnInit } from '@angular/core';
import{ PatientService} from 'src/app/services/patient.service'
@Component({
  selector: 'app-patient',
  template: `
  <h4>patients</h4>
  <table>
    <tr>
        <th>No</th>
        <th>Patient Number</th>
        <th>IsAnOutPatient</th>
        <th>Full Name</th>
        <th>Email Address</th>
        <th>Contact PhoneNumber</th>
        <th>Date Of Birth</th>
  <tr>
  <tr *ngFor="let patient of patients; let i = index">
     <td>{{i}}</td>
     <td> {{patient.patientNumber}}</td>
     <td>{{patient.isAnOutPatient}}</td>
     <td>{{patient.fullName}}</td>
     <td> {{patient.emailAddress}}</td>
     <td>{{patient.phoneNumber}}</td>
     <td>{{patient.dateOfBirth}}</td>
 </tr>`,
  styles: [
    'td { text-align: center; }',
    'table {width: 50%;}',
    'table, th, td {border: 1px solid black; background-color: silver;}'
  ]
})
export class PatientComponent implements OnInit {

  patients?: any[];
  constructor(private patientService: PatientService) { }
  
  ngOnInit(): void {
    this.retrievePatients();
  }

  retrievePatients(): void {
    this.patientService.getAll()
      .subscribe({
        next: (data) => {
           this.patients=data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
      //console.log(this.patients);
  }

 

}
