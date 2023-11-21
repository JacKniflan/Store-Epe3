import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  hideSideMenu = signal(true);


  //Injectamos el servico del carrito de compra para poder acceder a los productos y al total
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;


  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

}
