import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.css']
})
export class TestNgStyleComponent implements OnInit {
  myStyle:{};
  applyStyle(style){
    this.myStyle = JSON.parse("{"+style+"}"); 
  }
  constructor() { }

  ngOnInit() {
  }

}
