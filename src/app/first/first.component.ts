import {Component} from "@angular/core";
@Component({
	selector : "app-first",
	templateUrl : "first.component.html",
	styleUrls : ["first.component.css"]
})

export class FirstComponent{
	headTwo:string = "This is my first App....";
	changeTitle(){
		this.headTwo = "I am changed..";
	}
	returnString(){
		return "I love interpolation";
	}
	imageUrl = "../../assets/earth.jpg";
}