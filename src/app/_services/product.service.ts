import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = 'http://localhost:5000/v1/api/produtos';
  constructor(private http: HttpClient) { }
  get() {
    return this.http.get(this.productUrl);
  }

}
