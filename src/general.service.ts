import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginComponent } from './app/login/login.component';

@Injectable()

export class GeneralService {
   private url = 'http://10.177.7.5:8090/api/'
   constructor(private http: HttpClient) { }

   getAdvantageData() {
      let apiUrl = './assets/item.json';
      return this.http.get(apiUrl);
   }

   register(obj) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json')
      return this.http.post(this.url + 'user/register-user', obj, {
         headers: headers
      });
   }

   login(obj) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json')
      return this.http.post(this.url + 'auth/sign-in', obj, {
         headers: headers
      });
   }

   logout() {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json')
      return this.http.post(this.url + 'auth/logout', {
         headers: headers
      });
   }

   getCategories() {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json')
      return this.http.get(this.url + 'category/get-all-category', {
         headers: headers
      });
   }

   getAllItems(obj) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json')
      return this.http.post(this.url + 'items/get-all-items', obj, {
         headers: headers
      });
   }

   submitItem(obj) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json')
      return this.http.post(this.url + 'items/new', obj, {
         headers: headers
      });
   }

   getListedItem() {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json')
      return this.http.get(this.url + 'items/item-history/'+parseInt(localStorage.getItem('userID')), {
         headers: headers
      });
   }
}