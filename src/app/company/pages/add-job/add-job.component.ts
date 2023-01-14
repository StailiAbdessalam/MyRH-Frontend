import { Component, OnInit } from '@angular/core';
import {TextEditorService} from "../../services";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../../core";

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

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
              private countryService: CountryService) { }

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

}
