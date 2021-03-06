import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }       from './about/about.component';
import { ContactComponent }     from './contact/contact.component';
import { NewsComponent }        from './news/news.component';
import { AuthComponent }        from './auth/auth.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProfileComponent }     from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news',     component: NewsComponent },
  { path: 'login', component: AuthComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile/:displayName', component: ProfileComponent },
  { path: 'profile/:displayName/:id', component: ProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
