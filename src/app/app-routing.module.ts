import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './storyComponent/home/home.component';
import { AboutComponent } from './storyComponent/about/about.component';
import { LoginComponent } from './storyComponent/login/login.component';
import { RegisterComponent } from './storyComponent/register/register.component';
import { IdeasComponent } from './storyComponent/videoIdea/ideas/ideas.component';
import { AddIdeaComponent } from './storyComponent/videoIdea/add-idea/add-idea.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'register', component:RegisterComponent},
  {path: 'about', component:AboutComponent},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'ideas', component:IdeasComponent},
  {path: 'add-idea', component:AddIdeaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
