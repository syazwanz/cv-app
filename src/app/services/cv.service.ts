import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor(private apiService: ApiService) {}

  getProfile(id: number): Observable<any> {
    return this.apiService.get(`/cv/profile/${id}`);
  }

  getSkill(id: number): Observable<any> {
    return this.apiService.get(`/cv/skill/${id}`);
  }

  getExperience(id: number): Observable<any> {
    return this.apiService.get(`/cv/experience/${id}`);
  }

  getEducation(id: number): Observable<any> {
    return this.apiService.get(`/cv/education/${id}`);
  }

  getCourse(id: number): Observable<any> {
    return this.apiService.get(`/cv/course/${id}`);
  }
}
