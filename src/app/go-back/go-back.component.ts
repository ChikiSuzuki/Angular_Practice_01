import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.css']
})
export class GoBackComponent {

constructor(  private location: Location) {}

//前の画面に戻る
goBack(): void {
  this.location.back();
}

}
