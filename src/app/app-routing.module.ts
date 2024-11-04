import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CartComponent } from './cart/cart.component'; // Importer le composant Cart
import { CourseDetailsComponent } from './course/course.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: CoursesComponent }, // Route pour le composant des cours
  { path: 'cart', component: CartComponent }, // Route pour le panier
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
