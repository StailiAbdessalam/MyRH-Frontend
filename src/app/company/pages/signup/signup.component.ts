import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../../services";
import {OauthService} from "../../../core";

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


  constructor(private companyService: CompanyService,
              private oauthService: OauthService) { }

  ngOnInit(): void {
  }




  showForm() {
    if(this.companyForm.invalid){
      this.error = true
      this.errorValue = 'Please check if all fields are valid'
      return
    }
    this.error = false
    console.log(this.companyForm.controls)

    const company = {
      name: this.companyForm.get('name')?.value ?? '',
      email: this.companyForm.get('email')?.value ?? '',
      password: this.companyForm.get('password')?.value ?? '',
      size: this.companyForm.get('size')?.value ?? '',
      foundationDate: this.companyForm.get('foundationDate')?.value ?? '',
      logo: 'test.png'
    }

    this.companyService.register(company).subscribe({
      next: (data) => {
        this.oauthService.updateToken(data.token)
        localStorage.setItem('email', data.email)
      },
      error: (err) => {
        console.log(err)
        this.error = true
        this.errorValue = 'Something went wrong, try again!'
      }
    })
  }

}
