import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { VideoCollectionComponent } from './video-collection.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'video-collection',
    component: VideoCollectionComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);