import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import {NavbarComponent} from './components/navbar/navbar.component'
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'user',
    component: UsersComponent,
    data: { title: 'User Profile' }
  },
  {
    path:'nav',
    component: NavbarComponent,
    
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }