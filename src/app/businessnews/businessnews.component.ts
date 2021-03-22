import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['../style.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  BusinessDisplay:any=[];

  ngOnInit(): void {

    this._services.BusinessNews().subscribe((result)=>
    {
        this.BusinessDisplay=result.results;
    });
  }

}
