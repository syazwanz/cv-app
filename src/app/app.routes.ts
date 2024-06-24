import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: CvComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
