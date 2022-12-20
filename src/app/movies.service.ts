import { Injectable } from '@angular/core';
import { Movies } from './movies';
import { Year_Movies_list } from './mock-year-movie';
import { Life_Movies_list } from './mock-life-movies';

//RxJSライブラリからObservableクラスをインポート（非同期処理用）
import { Observable, of } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor() { }

//年間ベスト映画一覧を取得
getYearMovies(): Observable<Movies[]> {
const yearMovies  = of(Year_Movies_list);
return yearMovies;
}

//人生ベスト映画一覧を取得
getLifeMovies(): Observable<Movies[]> {
  const lifeMovies  = of(Life_Movies_list);
  return lifeMovies;
  }
  
//映画の詳細を取得
getMovie(name: string): Observable<Movies> {
  const movie = Life_Movies_list.find(m => m.name === name)!;
  return of(movie);
}

//配列に追加
addMovie(rankYear: number,rankLife: number,name: string,comment: string): void {

      Life_Movies_list.splice((rankLife - 1),0,{name,comment});

      Year_Movies_list.splice((rankYear - 1),0,{name,comment});
 
}

//コメントをアップデート
saveComment(movie: Movies,comment: string): void {
  const indexNumberofYear: number = Year_Movies_list.indexOf(movie);
  const indexNumberofLife: number = Life_Movies_list.indexOf(movie);

  //Yearリストの方に存在する場合は、Year,Life両方のコメントを更新
  //Lifeに関して：life-best-moviesからmovies-detailに移動、更新を行う場合、indexNumberofLifeは-1になり認識されない
  //　　　　　　　その為、映画データからnameのみ切り出し、名前一致で更新の有無を判断
  if ( indexNumberofYear !== -1) {
    Year_Movies_list[indexNumberofYear] = {name: movie.name,comment: comment};
    
    //コールバック関数利用
    Life_Movies_list.forEach(function(value) {
                                    const name = String(movie.name);
                                    if (String(value.name) === name) {
                                      Life_Movies_list[indexNumberofLife] = {name: movie.name,comment: comment};
                                    }
    })
    
  }  //Lifeリストだけに存在する場合は、Lifeリストだけ更新 
  else if (indexNumberofLife !== -1) {
    Life_Movies_list[indexNumberofLife] = {name: movie.name,comment: comment};
  }

}

//映画を削除
deleteMovie(movie: Movies,name: string) {
Life_Movies_list.forEach(function(value,indexOf) {
  if (String(value.name) === name) {
    Life_Movies_list.splice(indexOf,1);
    console.log(indexOf);
  }
 })

 Year_Movies_list.forEach(function(value,indexOf) {
  if (String(value.name) === name) {
    Year_Movies_list.splice(indexOf,1);
    console.log(indexOf);
  } 
 })
}

//映画検索
searchMovies(term: string): Movies[] {

   let movieslist: Movies[] = new Array;
  if (term.trim() === "") {
    return([])
  } else {
    Life_Movies_list.forEach(function(value){
      console.log(value.name);
      console.log(term);
      if (String(value.name).search(term) !== -1 ) {
        movieslist.push({name: value.name,comment: ""});
      }
    })
    return movieslist;
  }
  
}
}
