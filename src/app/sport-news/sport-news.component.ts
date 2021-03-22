import { NewsapiservicesService } from './../service/newsapiservices.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['../style.css']


})
export class SportNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }
  SportDisplay: any = [];

  ngOnInit(): void {

    this._services.SportNews().subscribe((result) => {

      this.SportDisplay = result.results;
    });
  }

}
