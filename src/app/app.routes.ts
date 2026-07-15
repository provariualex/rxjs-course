import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: HomeComponent, path: 'home' },
  { component: PostsComponent, path: 'posts' },
];
