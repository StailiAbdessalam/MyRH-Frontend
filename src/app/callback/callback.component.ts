import { Component, OnInit } from '@angular/core';
import {OauthService} from "../core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private securityService: OauthService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (p) => {

        this.securityService.fetchToken(p['code'], p['state']).subscribe(data => {
          this.securityService.updateToken(data.accessToken)
          this.router.navigate(['/jobs'])
        })
      }
    })
  }

}
