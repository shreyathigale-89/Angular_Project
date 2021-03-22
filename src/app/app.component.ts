import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style.css']
})
export class AppComponent implements OnInit {


  constructor(private _http: HttpClient) { }

  ngOnInit(): void { }

  Api_key: any = 'iZADvHLZ7283BmOL9iOCSDSikmqPpjlO';

  NewsDisplay: any = [];
  value = '';
  error='';

  update(value: any) {

    this.value = value;
    if(value.length > 3)
    {

    this._http.get(`https://api.nytimes.com/svc/topstories/v2/${this.value}.json?api-key=${this.Api_key}`).subscribe(

      (result) => {

      this.NewsDisplay = result;

      (<HTMLInputElement>document.getElementById("search-comp")).style.display = "block";
      
    },
    
     (error) => {

      console.log(error);
   
      this.error=error.message;
      (<HTMLInputElement>document.getElementById("News")).style.display = "none";
    }
    );
  }
  else
  {
    this.alertbox();
  }
  }

  hide()
  {
    (<HTMLInputElement>document.getElementById("search-comp")).style.display = "none";
    (<HTMLInputElement>document.getElementById("errormsg")).style.display = "none";
  }

 

  alertbox()
{
  (<HTMLInputElement>document.getElementById('customAlert')).style.display = 'block';
  (<HTMLInputElement>document.getElementById('navbar')).style.opacity= '0.7';
  (<HTMLInputElement>document.getElementById('News')).style.opacity= '0.7';
}

confirm()
{
  (<HTMLInputElement>document.getElementById('customAlert')).style.display = 'none';
  (<HTMLInputElement>document.getElementById('navbar')).style.opacity= '1';
  (<HTMLInputElement>document.getElementById('News')).style.opacity= '1';
}

}



