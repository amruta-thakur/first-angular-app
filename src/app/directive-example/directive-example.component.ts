import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  
  dcHeroes = ["Batman", "Superman", "Wonder Woman"];
  index:number = 0;
  toggleHerosFlag:boolean = true;
  selectedHero:string;
  myStyles:{};
  color:string;
  toggleStyleFlag:boolean = true;
  currentCssClass:string = 'styleRed';
  inputColor:string="red";

  setCssClass(){
    if(this.currentCssClass === 'styleRed'){
      this.currentCssClass = 'styleWhite';
    } else{
      this.currentCssClass = 'styleRed';
    }
  }


  toggleHero(){
  	this.toggleHerosFlag = !this.toggleHerosFlag;
  }

  selectHero(hero){
  	this.selectedHero = hero;
  	console.log(this.selectedHero);
  }

  setStyle() {
    this.myStyles={
      'font-weight' : this.toggleStyleFlag ? 'bold':'normal',
      'font-size' : this.toggleStyleFlag ?'24px':'15px',
      'color' : this.setRandomColor()
    }
    this.toggleStyleFlag = !this.toggleStyleFlag;
  }

  setRandomColor() {
    this.color = "#";
    var letter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    for(let i=0; i<6; i++){
      this.color += letter[Math.floor(Math.random()*16)];
    }
    
    return this.color;
  }

  constructor() { }

  ngOnInit() {
  }

}
