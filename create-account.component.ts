import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  countries: any[] = [];
  states: any[] = [];
  selectedCountryId: string | null = null;

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit() {
    this.jsonDataService.getCountries().subscribe(data => {
      this.countries = data.countries;
    });
  }

  onCountryChange(countryId: string) {
    this.selectedCountryId = countryId;
    const selectedCountry = this.countries.find(country => country.id === countryId);
    this.states = selectedCountry ? selectedCountry.states : [];
  }
}
