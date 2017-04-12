import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = [5,10,15,20,25];
  data2D: any
ngOnInit() {
    var dataset = [];
    var numDataPoints = 50;
    var xRange = Math.random() * 1000;
    var yRange = Math.random() * 1000;
    for (var i = 0; i < numDataPoints; i++) {
        var newNumber1 = Math.round(Math.random() * xRange);
        var newNumber2 = Math.round(Math.random() * yRange);
        dataset.push([newNumber1, newNumber2]);
    }
    this.data2D = dataset;
  }
  saveData(data) {
    this.data = data;
  }
}
