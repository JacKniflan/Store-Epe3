import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart = signal<Product[]>([]);
  total = computed(() => {//Manejador de estado del carro de compra sin importar la ubicación del componente

    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }


  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  }
}
