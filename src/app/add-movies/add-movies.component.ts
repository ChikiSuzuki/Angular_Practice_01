import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';
import { FormGroup,FormControl} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent {

  //property
  addMovieForm = this.fb.group({
    //type=numberーのフォームでvalidatorsがうまく行かない
    // movieRankYear: [""],
    // movieRankLife: [""],
    // movieName: [""],
    // movieComment: [""]
    rankYear: new FormControl("",[Validators.required,Validators.min(1)]),
    rankLife: new FormControl("",[Validators.required,Validators.min(1)]),
    name: new FormControl("",Validators.required),
    comment: new FormControl("")
  })

  // rankYear = new FormControl("");
  // rankLife = new FormControl("");
  // name = new FormControl("",Validators.required);
  // comment = new FormControl("");


constructor(private moviesService: MoviesService,
            private location: Location,
            private fb: FormBuilder) {}



//method
addMovie(): void {
  // input要素を取り込む際はgeteElementById記述の前に<HTMLInputElement>で型を明示する必要がある
  // const rankTextYear = <HTMLInputElement>document.getElementById("movie-rank-year");
  // const rankTextLife = <HTMLInputElement>document.getElementById("movie-rank-life");
  // const nameText = <HTMLInputElement>document.getElementById("movie-name");
  // const commentText = <HTMLInputElement>document.getElementById("movie-comment");
  // const rankYear = Number(rankTextYear.value);
  // const rankLife = Number(rankTextLife.value);
  // const name = String(nameText.value);
  // const comment = String(commentText.value);



  // this.moviesService.addMovie(rankYear,rankLife,name,comment);
  this.moviesService.addMovie(Number(this.addMovieForm.controls.rankYear.value),
                              Number(this.addMovieForm.controls.rankLife.value),
                              String(this.addMovieForm.controls.name.value),
                              String(this.addMovieForm.controls.comment.value));
  this.location.back();
}

onInput () {
  console.log(this.addMovieForm.valid);
  console.log(this.addMovieForm.value);
}
}
