import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course',
  // standalone: true,
  // imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CoursesService,
  ) {}

  ngOnInit(): void {
    console.log('call ngonit');
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courseService.getCourseById(courseId);
  }
}
