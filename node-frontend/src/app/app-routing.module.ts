import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WeboardComponent } from './components/weboard/weboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateContentBoardComponent } from './components/create-content-board/create-content-board.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { CreateContentBoardIdComponent } from './components/create-content-board-id/create-content-board-id.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent ,canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'create-content', component: CreateContentBoardComponent,canActivate:[AuthGuard]},
  { path: 'list-content', component: ContentListComponent,canActivate:[AuthGuard]},
  { path: 'weboard/:id', component: WeboardComponent},
  { path: 'weboard-addon-content', component: CreateContentBoardIdComponent },
  { path: 'admin', component: AdminComponent ,canActivate:[AuthGuard]},
  { path: 'profile/:id', component: ProfileComponent ,canActivate:[AuthGuard]},
  

  { path: '**', redirectTo:'/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
