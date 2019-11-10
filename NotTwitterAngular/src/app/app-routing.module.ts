import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';

import { AuthGuard } from './auth.guard';
import {NavbarComponent} from './components/navbar/navbar.component'
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: `user`,
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'nav',
    component: NavbarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule { }