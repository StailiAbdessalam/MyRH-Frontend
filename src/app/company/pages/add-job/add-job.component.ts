import { Component, OnInit } from '@angular/core';
import {OfferService, TextEditorService} from "../../services";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../../core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  error: boolean = false

  countries: String[] = []

  addJobForm: FormGroup = new FormGroup<any>({
    description: new FormControl(this.textEditorService.textEditorValue, [Validators.required]),
    salary: new FormControl(null),
    salaryType: new FormControl(null),
    jobType: new FormControl('Remote', [Validators.required]),
    profile: new FormControl('', [Validators.required]),
    country: new FormControl('Afghanistan', [Validators.required])
  })

  constructor(private textEditorService: TextEditorService,
              private countryService: CountryService,
              private offerService: OfferService,
              private router: Router) { }

  ngOnInit(): void {
    type Country = {
      name: string,
      independant: boolean
    }

    this.countryService.getCountries().subscribe({
      next: (country: Country | any) => {
        this.countries = country.map((country: Country) => country.name)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  displayFormValues() {
    console.log(this.addJobForm.controls)
  }



  addOffer() {

    this.displayFormValues()

    const payload = {
      profile: this.addJobForm.get('profile')?.value ?? '',
      description: this.textEditorService.textEditorValue,
      jobType: this.addJobForm.get('jobType')?.value ?? '',
      salary: this.addJobForm.get('salary')?.value ?? '',
      salaryType: this.addJobForm.get('salaryType')?.value ?? '',
      country: this.addJobForm.get('country')?.value ?? '',
      state: 'OPEN'
    }

    this.offerService.add(payload).subscribe({
      next: (data) => {
        this.router.navigate(['/jobs'])
      },
      error: (err) => {
        this.error = true
      }
    })
  }


}
