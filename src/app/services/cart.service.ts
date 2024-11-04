import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'cartItems'; // Clé pour le Local Storage

  //   constructor() {}

  addToCart(course: Course) {
    const currentCart = this.getCart(); // Récupérer le panier actuel
    console.log(
      'current',
      currentCart,
      course,
      currentCart.find((item) => item.id === course.id),
    );
    const existingProduct = currentCart.find((item) => item.id === course.id);

    if (existingProduct) {
      if (existingProduct.quantity) {
        existingProduct.quantity += 1;
        console.log('quantity', currentCart);
      } else {
        existingProduct.quantity = 1;
      }
    } else {
      currentCart.push({ ...course, quantity: 1 });
      console.log('testcart', currentCart);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(currentCart)); // Sauvegarder dans le Local Storage
  }

  getCart(): Course[] {
    const cart = localStorage.getItem(this.storageKey); // Obtenir le contenu du Local Storage
    return cart ? JSON.parse(cart) : []; // Retourner le panier ou un tableau vide si rien n'est trouvé
  }

  clearCart() {
    localStorage.removeItem(this.storageKey); // Effacer le Local Storage
  }
}
