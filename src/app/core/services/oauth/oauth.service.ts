import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OauthService {
  private authorizeEndpoint = '/oauth2/authorization/google'
  private tokenEndpoint     = '/login/oauth2/code/google'
  private baseUrl           = environment.baseUrl
  private tokenKey          = 'key'

  constructor(private http: HttpClient) { }

  login(){
    window.open(this.baseUrl + this.authorizeEndpoint, '_self')
  }

  updateToken(token: string) {
    localStorage.setItem(this.tokenKey, token)
  }

  fetchToken(code: string, state: string): Observable<any> {
    return  this.http.get(this.baseUrl + this.tokenEndpoint + "?code=" + code + "&state=" + state);
  }

  getToken(){
    return localStorage.getItem(this.tokenKey)
  }

  isLoggedIn(): boolean{
    const token = this.getToken();
    return token != null
  }

}
