import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   private subject =new Subject<any>();
   
   
   sendclickevent(){
    this.subject.next({});
   }
   getclickevent():Observable<any>{
    return this.subject.asObservable();
   }

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get('http://localhost:8080/emp');
    
  }
}
