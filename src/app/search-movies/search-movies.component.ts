import { Component } from '@angular/core';
import { Movies } from '../movies';
import { Life_Movies_list } from '../mock-life-movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent {
 movies!: Movies[]

constructor (private movieService: MoviesService) {}

searchMovies(term: string) {
  this.movies = this.movieService.searchMovies(term);
}

}
