import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  private apiUrlListDigimon = environment.apiUrlListDigimon;
  private apiUrlDigimonDetail = environment.apiUrlDigimonDetail;
  constructor(private http: HttpClient) { }

  getDigimons(pageNumber: number, pageSize: number): Observable<any> {
    const url = `${this.apiUrlListDigimon}?pageSize=${pageSize}&page=${pageNumber}`;
    return this.http.get(url);
  }
  getDigimonDetail(id: number): Observable<any> {
    const url = `${this.apiUrlDigimonDetail}/${id}`; // Construye la URL para obtener el detalle del digimon por ID
    return this.http.get(url);
  }
}
