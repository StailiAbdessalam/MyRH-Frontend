import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SecurityService} from "../../../core/services/security/security.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  })

  error: boolean = false

  constructor(private oauthService: OauthService,
              private securityService: SecurityService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  oauthLogin(){
    this.oauthService.login()
  }

  login(){
    if(this.loginForm.valid){
      this.securityService.companyLogin(this.email?.value, this.password?.value).subscribe({
        next: (data) => {
          this.oauthService.updateToken(data.token)
          this.router.navigate(['/'])
        },
        error: err => {
          this.error = true
        }
      })
    }
  }

}
