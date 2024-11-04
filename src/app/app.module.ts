// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';
import { CartService } from './services/cart.service';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    MaterialModule,
  ],
  providers: [CoursesService, CartService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
