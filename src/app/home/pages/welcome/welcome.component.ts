import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  countries :any 
  selectedCountry: string = 'Afghanistan'
  searchText: string = ''

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    type Country = {
      name: string, 
      independant: boolean
    };

    this.countryService.getCountries().subscribe(
      (data: Country[] | any) => {
        this.countries = data.map((country: Country) => country.name)
      }
    )   
  }

  displayCountry(value: string) {
    console.log('previous : ',this.selectedCountry);
    console.log('current : ', value);
  }
}
