import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { CartService } from '../services/cart.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  // standalone: true,
})
export class CoursesComponent implements OnInit {
  title = 'list of courses';
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(
    private coursesService: CoursesService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
    this.filteredCourses = [...this.courses];
    console.log('onInit', this.filteredCourses);
    // throw new Error('Method not implemented.');
  }

  addToCart(course: Course) {
    this.cartService.addToCart(course);
    alert(`${course.title} a été ajouté au panier !`);
  }

  searchTerm: string = '';

  searchCourses() {
    // Filter courses based on the search term
    console.log('filter', this.searchTerm, this.filteredCourses);
    this.filteredCourses =
      this.searchTerm !== ''
        ? this.courses.filter(
            (course) =>
              course.title
                ?.toLowerCase()
                .includes(this.searchTerm.toLowerCase()) ||
              course.author
                ?.toLowerCase()
                .includes(this.searchTerm.toLowerCase()),
          )
        : this.courses;
  }
}
