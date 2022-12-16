import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { idea } from '../data-types';
import { addIdeaValue } from '../models/addidea.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddIdeaService {

  constructor(private _http: HttpClient, private authService: AuthService) { }


  // addIdea(value: any): Observable<any> {
  //   //console.log(value)
  //   const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGYzYzQyNzkyYzhiMGFhMjVkY2YyNSIsIl9pZCI6IjYzOGYzYzQyNzkyYzhiMGFhMjVkY2YyNSIsImlhdCI6MTY3MTAxODcyNiwiZXhwIjoxNjczNjEwNzI2fQ.ZcmHnayrHVnPtNGoFDi7MaNugcntGMGG-M-EgOA8ij0"
  //   const httpOptionsToken = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: token,
  //     }),
  //   };
  //   return this._http.post("http://localhost:5000/ideas", value, httpOptionsToken);
  // }
  

  addIdea(value:addIdeaValue): Observable<any> {
    const URL = "http://localhost:5000/ideas";
    const token = this.authService.getToken();
    console.log('addideatoken', token)

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this._http.post(URL, value, httpOptionsToken);
  }


  getIdea(): Observable<any> {
    const URL = "http://localhost:5000/ideas";
    const token = this.authService.getToken();
    //console.log(token)
    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };

    return this._http.get(URL, httpOptionsToken)
  };


  deleteIdea(_id: number): Observable<any> {
    const URL = `http://localhost:5000/ideas/${_id}`;
    const token = this.authService.getToken();
    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this._http.delete(URL, httpOptionsToken)
  }


  ideaList() {
    return this._http.get<idea[]>("http://localhost:3000/addIdeas");
  }


  updateIdea(ideas: idea) {
    return this._http.put<idea>(`http://localhost:3000/addIdeas/${ideas.id}`, ideas)
  }
}
