import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/v1/api/autoriza/login';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl, model);
  }
}
