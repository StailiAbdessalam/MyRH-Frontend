import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  name: string = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.baseUrl + '/v1/home').subscribe((data: any) => this.name = data.name)
  }

}
