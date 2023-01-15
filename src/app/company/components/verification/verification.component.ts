import { Component, OnInit } from '@angular/core';
import {EncryptService, OauthService} from "../../../core";
import {CompanyService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  code: string = ''
  error: boolean = false
  email: string = localStorage.getItem('email') ?? ''


  constructor(private encryptService: EncryptService,
              private companyService: CompanyService,
              private router: Router,
              private oauthService: OauthService) { }

  ngOnInit(): void {
  }

  verify() {
    const encryptedPassword: string = localStorage.getItem('password') ?? ''
    const password = this.encryptService.decrypt(encryptedPassword)

    const payload = {
      email: this.email,
      password,
      code: this.code
    }

    this.companyService.verify(payload).subscribe({
      next: (data: any) => {
        this.oauthService.updateToken(data.token)
        this.router.navigate(['/jobs'])
      },
      error: err => {
        console.log(err)
        this.error = true
      }
    })


  }



}
