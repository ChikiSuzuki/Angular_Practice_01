import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeBestMoviesComponent } from './life-best-movies/life-best-movies.component';
import { YearBestMoviesComponent } from './year-best-movies/year-best-movies.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { GoBackComponent } from './go-back/go-back.component';
import { AddMoviesButtonComponent } from './add-movies-button/add-movies-button.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeBestMoviesComponent,
    YearBestMoviesComponent,
    MoviesDetailComponent,
    AddMoviesComponent,
    GoBackComponent,
    AddMoviesButtonComponent,
    DeleteMovieComponent,
    SearchMoviesComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
