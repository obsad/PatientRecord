import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const baseUrl:string = 'http://localhost:8080/Patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    //console.log(baseUrl);
    return this.http.get(baseUrl);
  }
}
