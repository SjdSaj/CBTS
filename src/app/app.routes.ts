import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path:'home',component:HomepageComponent},
    { path:'**',pathMatch:'full',redirectTo:'home'}
];
