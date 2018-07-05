import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {

  public texts:  Array<string> = [];

  constructor() {
    this.texts.push("un");
    this.texts.push("deux");
    this.texts.push("trois");
    

   }

  ngOnInit() {
  }

}
