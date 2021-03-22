import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

 Api_key:any ='iZADvHLZ7283BmOL9iOCSDSikmqPpjlO';

 

  //newsApiURl
  newsApiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${this.Api_key}`;

  //technewsapiurl
  techApiUrl = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${this.Api_key}`;
 
  //BusinessapiUrl
  BusApiUrl = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${this.Api_key}`;
 
  //Sportnewsapiurl
  sportApiUrl = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${this.Api_key}`;


  //topheading()

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //technews()

  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  //SportNews()
SportNews():Observable<any>
{
  return this._http.get(this.sportApiUrl);
}

//BusinessNews()
  BusinessNews(): Observable<any> {
    return this._http.get(this.BusApiUrl);
  }
 
}
