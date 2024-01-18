import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_NAME } from './constants/app.constant';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

const routes: Routes = [
  {
    title: `Get in touch - ${APP_NAME}`,
    path: 'get-in-touch',
    component: GetInTouchComponent,
  },
  {
    title: `Welcome - ${APP_NAME}`,
    path: '',
    component: LandingPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
