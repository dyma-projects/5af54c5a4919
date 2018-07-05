import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  name: string;

  inputType: string ;

  constructor() { 
    this.name = 'Christophe';
    this.inputType = "password";
  }

  switchName (event: Event): void{ 
    console.log(event);
    if (this.name == 'Christophe') {
      this.name = "Huault";
    } else {
      this.name = "Christophe";
    }
  }

  ngOnInit() {
  }

}
