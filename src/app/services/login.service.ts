import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../models/login';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrlLoginUser = environment.apiUrlLoginUser;
  constructor(private http: HttpClient) { }

  logInUser(body:LoginRequest):Observable<LoginResponse>{
    const url = this.apiUrlLoginUser;
    return this.http.post<LoginResponse>(url,body);

  }
}
