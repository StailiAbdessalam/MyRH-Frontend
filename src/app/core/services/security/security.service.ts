import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SecurityService {

  baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  private login(type: string, email: string, password: string): Observable<any> {
    let body = {
      email,
      password
    }
    return this.http.post(`http://localhost:8080/login/${type}`, body)
  }

  agentLogin(email: string, password: string): Observable<any> {
    return this.login('agent', email, password)
  }

  companyLogin(email: string, password: string): Observable<any> {
    return this.login('company', email, password)
  }

}
