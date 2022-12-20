import { Component,OnInit } from '@angular/core';
import { Movies } from '../movies';
import { Year_Movies_list } from '../mock-year-movie';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-year-best-movies',
  templateUrl: './year-best-movies.component.html',
  styleUrls: ['./year-best-movies.component.css']
})
export class YearBestMoviesComponent {

  //property
  movies: Movies[] = [];
  selectedMovie?: Movies;

  constructor(private moviesService: MoviesService,
              private location: Location) {}

  //method
  ngOnInit(): void {
  this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getYearMovies()
    .subscribe(movies =>this.movies = movies);
  }

}
