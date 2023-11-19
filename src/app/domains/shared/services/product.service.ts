import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient); //Nos permite conectarnos a un servidor externo

  constructor() { }

  getProducts(category_id?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products')//Si la catergoria exista lo agregamos a la url y si no no lo agregamos
    if (category_id) {
      url.searchParams.set('categoryId', category_id)

    }
    return this.http.get<Product[]>(url.toString());
  }

  getOne(id: string) {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }

}
