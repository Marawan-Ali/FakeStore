import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get("https://fakestoreapi.com/products")
  }

  getSpecificProduct(id: string): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
