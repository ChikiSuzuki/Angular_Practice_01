import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeBestMoviesComponent } from './life-best-movies/life-best-movies.component';
import { YearBestMoviesComponent } from './year-best-movies/year-best-movies.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  // {path: "", component: AppComponent},
  {path: "add_movies", component: AddMoviesComponent},
  {path: "movies_detail/:name", component: MoviesDetailComponent},
  {path: "life_best_movies", component: LifeBestMoviesComponent},
  {path: "year_best_movies", component: YearBestMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
