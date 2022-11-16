import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './storyComponent/home/home.component';
import { AboutComponent } from './storyComponent/about/about.component';
import { LoginComponent } from './storyComponent/login/login.component';
import { RegisterComponent } from './storyComponent/register/register.component';
import { NavbarComponent } from './storyComponent/navbar/navbar.component';
import { IdeasComponent } from './storyComponent/videoIdea/ideas/ideas.component';
import { AddIdeaComponent } from './storyComponent/videoIdea/add-idea/add-idea.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    IdeasComponent,
    AddIdeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
