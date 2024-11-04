import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-cart',
  // standalone: true,
  // imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems: Course[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    console.log('cartItem', this.cartItems);

    this.cartItems = this.cartService.getCart(); // Récupérer les articles du panier
  }

  clearCart() {
    this.cartService.clearCart(); // Effacer le Local Storage
    this.cartItems = []; // Réinitialiser la liste d'articles du panier
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + item.price * (item.quantity || 1); // Utilise 1 comme quantité par défaut
    }, 0);
  }
}
