import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  statut: boolean ;
  displayP1: string = "block";
  displayP2: string = "none";

  constructor() { 
    this.statut = true;
  }

  ngOnInit() {
  }

  switchP(): void{
    this.statut = ! this.statut;
    console.log(this.statut);
    if(this.statut){
      this.displayP1 = "block";
      this.displayP2 = "none";
    } else {
      this.displayP1 = "none";
      this.displayP2 = "block";
    }
  }




}
