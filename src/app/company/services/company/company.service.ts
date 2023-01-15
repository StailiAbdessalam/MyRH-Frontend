import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

type Company = {
  name: string,
  email: string,
  password: string,
  size: string,
  foundationDate: string,
  logo: string
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) {}

  register(payload: Company): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, payload )
  }
}
