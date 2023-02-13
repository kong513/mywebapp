import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WeboardComponent } from './components/weboard/weboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { CreateContentBoardComponent } from './components/create-content-board/create-content-board.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { CreateContentBoardIdComponent } from './components/create-content-board-id/create-content-board-id.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WeboardComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    AdminComponent,
    UserComponent,
    CreateContentBoardComponent,
    ContentListComponent,
    CreateContentBoardIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
