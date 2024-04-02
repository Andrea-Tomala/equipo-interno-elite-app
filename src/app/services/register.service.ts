import { Injectable } from '@angular/core';
import { RegisterRequest, RegisterResponse } from '../models/register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrlRegisterUser = environment.apiUrlRegisterUser;
  constructor(private http: HttpClient) { }

  logInUser(body:RegisterRequest):Observable<RegisterResponse>{
    const url = this.apiUrlRegisterUser;
    return this.http.post<RegisterResponse>(url,body);

  }
}
