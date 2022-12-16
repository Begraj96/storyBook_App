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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http'
import { NgToastModule } from 'ng-angular-popup';
import { IdeasUpdateComponent } from './storyComponent/ideas-update/ideas-update.component';
import { LoadingComponent } from './storyComponent/loading/loading.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxUiLoaderHttpModule } from "ngx-ui-loader";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    IdeasComponent,
    AddIdeaComponent,
    PageNotFoundComponent,
    IdeasUpdateComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
