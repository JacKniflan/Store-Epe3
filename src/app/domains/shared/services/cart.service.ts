// cart.service.ts

import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  }

  // Método para eliminar un elemento del carrito por su índice
  removeFromCart(index: number) {
    this.cart.update(state => {
      const newState = [...state];
      if (index >= 0 && index < newState.length) {
        newState.splice(index, 1);
      }
      return newState;
    });
  }
}
