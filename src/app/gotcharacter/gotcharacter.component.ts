import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GotcharacterComponent implements OnInit {
  GOTCharacter:string[];
  GOTCharacterFirstName:string[] = ['John','Aarya','Cersei','Daenary'];
  GOTCharacterLastName:string[] = ['Snow','Stark','Lannisters','Targaryen'];
  i=0;
  stopSwitch:any;
  stopSwitchStatus = true;
  twoWayData="Tyrion";

  @Input() imageUrlChild:string;

  stopSwitchingName(){
  	clearInterval(this.stopSwitch);
  	this.stopSwitchStatus=true;
  }

  startSwitchingName(){
  	this.stopSwitch = setInterval(()=>{
  		if(this.i % 2 === 0){
  			this.GOTCharacter = this.GOTCharacterFirstName;
  			console.log("if");
  		} else{
  			this.GOTCharacter = this.GOTCharacterLastName;
  			console.log("else");
  		}
  		this.i++;
  	}, 3000);
  	this.stopSwitchStatus=false;
  }
  constructor() { 
  	this.GOTCharacter = this.GOTCharacterLastName;
  }

  ngOnInit() {
  	console.log(this.imageUrlChild);
  }

}
