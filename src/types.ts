import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface Profile {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  url: string;
  title: string;
  summary: string;
}

export type Experiences = Experience[];

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  start_month: number;
  start_year: number;
  end_month: number;
  end_year: number;
  description: string;
}

export type Educations = Education[];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  start_year: number;
  end_year: number;
}

export type Courses = Course[];

export interface Course {
  id: number;
  name: string;
  provider: string;
  url: string;
  start_month: number;
  start_year: number;
  end_month: number;
  end_year: number;
}

export type Skills = Skill[];

export interface Skill {
  id: number;
  category: string;
  list: string[];
}
