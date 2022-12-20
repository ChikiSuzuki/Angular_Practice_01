//リスト表示用のmoviesComponentの子コンポーネント
import { Component,OnInit,Input } from '@angular/core';
import { Movies } from '../movies';

//???
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { MoviesService } from '../movies.service';
import { DeleteMovieComponent } from '../delete-movie/delete-movie.component';


@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})


export class MoviesDetailComponent {
//property
@Input() movie?: Movies;

constructor(
  //???
  private route: ActivatedRoute,
  private moviesService: MoviesService,
  private location: Location
) {}

ngOnInit(): void {
  this.getMovie();
}

getMovie(): void {
  //名前情報取得
  const name = String(this.route.snapshot.paramMap.get("name"));
  this.moviesService.getMovie(name)
  .subscribe(movie => this.movie = movie);
}

//コメントをアップデート
saveComment(): void {
  const element = <HTMLInputElement>document.getElementById("comment");
  const newComment: string = element.value;
  // console.log(element);
  // console.log(this.movie);

 this.moviesService.saveComment(this.movie!,newComment);
 this.location.back();
}


// 映画を削除
deleteMovie(): void {
  this.moviesService.deleteMovie(this.movie!,String(this.movie!.name));
  this.location.back();
}

}
