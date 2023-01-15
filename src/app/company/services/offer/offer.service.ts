import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

type Offer = {
  profile: string,
  description: string,
  jobType: string,
  salary: string,
  salaryType: string,
  country: string,
  state: string
}

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  add(payload: Offer): Observable<any> {
    return this.http.post(`${this.baseUrl}/jobOffers`, payload)
  }

}
