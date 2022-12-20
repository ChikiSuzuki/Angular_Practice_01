import { Component } from '@angular/core';
import { Movies } from '../movies';
//import { Life_Movies_list } from '../mock-life-movies';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-life-best-movies',
  templateUrl: './life-best-movies.component.html',
  styleUrls: ['./life-best-movies.component.css']
})
export class LifeBestMoviesComponent {

movies: Movies[] = [];
selectedMovie?: Movies;

constructor (private moviesService: MoviesService,
             private location: Location){}

  //method
  ngOnInit(): void {
    this.getMovies();
    }
  
    getMovies(): void {
      this.moviesService.getLifeMovies()
      .subscribe(movies =>this.movies = movies);
    }

}
