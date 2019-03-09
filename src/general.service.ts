import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class GeneralService {
   private url = 'http://localhost:8090/api/'
    constructor(private http: HttpClient) { }
 
    getAdvantageData() {
       let apiUrl = './assets/item.json';
       return this.http.get(apiUrl);
    }  

    register(obj) {
       const headers = new HttpHeaders();
       headers.append('Content-Type', 'application/json')
      return this.http.post(this.url+'user/register-user', obj, {
         headers: headers
      })
    }
 }