import { Component, OnInit } from '@angular/core';
import cvData from './data';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
import { CvService } from '../services/cv.service';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { CourseComponent } from './course/course.component';
import { Courses, Educations, Experiences, Profile, Skills } from '../../types';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CommonModule,
    ProfileComponent,
    IntroComponent,
    SkillComponent,
    ExperienceComponent,
    EducationComponent,
    CourseComponent,
  ],
  templateUrl: './cv.component.html',
})
export class CvComponent implements OnInit {
  constructor(private cvService: CvService) {}

  profileData!: Profile;
  skillData!: Skills;
  experienceData!: Experiences;
  educationData!: Educations;
  courseData!: Courses;

  ngOnInit() {
    this.cvService.getProfile(1).subscribe((data) => {
      this.profileData = data;
    });

    this.cvService.getSkill(1).subscribe((data) => {
      this.skillData = data;
    });

    this.cvService.getExperience(1).subscribe((data) => {
      this.experienceData = data;
    });

    this.cvService.getEducation(1).subscribe((data) => {
      this.educationData = data;
    });

    this.cvService.getCourse(1).subscribe((data) => {
      this.courseData = data;
    });
  }
}
