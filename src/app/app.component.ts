// app.component.ts
import { Component, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
// import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly authService: AuthService = inject(AuthService);
  // title = 'app';
}
