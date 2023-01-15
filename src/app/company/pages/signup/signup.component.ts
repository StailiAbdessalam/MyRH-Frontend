import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../../services";
import {EncryptService, OauthService} from "../../../core";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  companyForm: FormGroup = new FormGroup<any>({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    size: new FormControl('MICRO', [Validators.required]),
    foundationDate: new FormControl('', [Validators.required]),
  })

  error:boolean = false
  errorValue: string = ''
  verificationPhase: boolean = false


  constructor(private companyService: CompanyService,
              private oauthService: OauthService,
              private encryptService: EncryptService) { }

  ngOnInit(): void {
  }




  showForm() {
    if(this.companyForm.invalid){
      this.error = true
      this.errorValue = 'Please check if all fields are valid'
      return
    }
    this.error = false

    const company = {
      email: this.companyForm.get('email')?.value ?? '',
      password: this.companyForm.get('password')?.value ?? '',
      name: this.companyForm.get('name')?.value ?? '',
      size: this.companyForm.get('size')?.value ?? '',
      foundationDate: this.companyForm.get('foundationDate')?.value ?? '',
      logo: 'test.png'
    }
    console.log(company)

    this.companyService.register(company).subscribe({
      next: (data) => {
        console.log(data)
        localStorage.setItem('email', company.email)
        localStorage.setItem('password', this.encryptService.encrypt(company.password))
        this.verificationPhase = true
      },
      error: (err) => {
        console.log(err)
        this.error = true
        this.errorValue = 'Something went wrong, try again!'
      }
    })
  }

}
