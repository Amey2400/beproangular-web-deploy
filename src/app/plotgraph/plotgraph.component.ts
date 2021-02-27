import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotgraph',
  templateUrl: './plotgraph.component.html',
  styleUrls: ['./plotgraph.component.css']
})
export class PlotgraphComponent implements OnInit {
  name:string="Amey";
  constructor() { }

  ngOnInit() {
    this.name="ok";
  }

}
