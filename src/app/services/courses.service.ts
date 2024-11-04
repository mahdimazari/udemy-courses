import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  courses: Course[] = [
    {
      id: 1,
      title: 'Angular Basics',
      author: 'John Doe',
      price: 29.99,
      description: 'Learn the basics of Angular.',
    },
    {
      id: 2,
      title: 'Advanced Angular',
      author: 'Jane Smith',
      price: 49.99,
      description: 'Learn the basics of Angular.',
    },
    {
      id: 3,
      title: 'Introduction to TypeScript',
      author: 'Emily Johnson',
      price: 19.99,
      description: 'Learn the basics of Angular.',
    },
    {
      id: 4,
      title: 'Building Web Apps',
      author: 'Michael Brown',
      price: 39.99,
      description: 'Learn the basics of Angular.',
    },
    {
      id: 5,
      title: 'Web Development Bootcamp',
      author: 'Linda Davis',
      price: 59.99,
      description: 'Learn the basics of Angular.',
    },
  ];
  //   constructor() {}
  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    console.log(
      'course Detials',
      this.courses.find((course) => course.id === id),
    );
    return this.courses.find((course) => course.id === id);
  }
}
