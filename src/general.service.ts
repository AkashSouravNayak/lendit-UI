import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class GeneralService {
   private url = 'localhost://10.177.7.5/api'
    constructor(private http: HttpClient) { }
 
    getAdvantageData() {
       let apiUrl = './assets/item.json';
       return this.http.get(apiUrl);
    }  

   //  register() {
   //    return this.http.post('')
   //  }
 }