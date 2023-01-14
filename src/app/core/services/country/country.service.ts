import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from "rxjs";


type Country = {
  name: string,
  independent: boolean
};


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: string[] = []

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  getCountries(): Observable<Object> {
    return this.http.get('https://restcountries.com/v2/all?fields=name')
  }
}
