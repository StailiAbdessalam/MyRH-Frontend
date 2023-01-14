import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OauthService } from './core';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private oauthService: OauthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.oauthService.isLoggedIn()){
      const req = request.clone({
        setHeaders: {
          'Content-type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + this.oauthService.getToken()
        }
      })

      return next.handle(req);
    }
    return next.handle(request)

  }
}
