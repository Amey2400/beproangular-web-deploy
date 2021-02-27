import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import * as _ from 'lodash';
declare var Plotly:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent{
  operations: [] = [];
  @ViewChild('chart', { static: false })
  el!: ElementRef;
  showplot_var:boolean=false;
  pltx: [] = [];
  plty: [] = [];
  dicty: {} = {};
  current_operation: string = '';
  constructor(public api: ApiService) { }
  
  sendData = () => {
    this.api.sendData().subscribe(
      data => {
        // console.log(data);
      },
      error => {
        //console.log(error);
      }
      
    )
    this.api.storePlotid().subscribe(
      data => {
       // console.log(data);
      },
      error => {
       // console.log(error);
      }
      
    )
    this.api.getPlotid().subscribe(
      data => {
        //console.log(this.operations);
        //console.log(data);
        this.pltx = JSON.parse(data[0].x);
        this.dicty = JSON.parse(data[0].y);
        console.log(this.pltx, this.dicty);
        //for ( var value of this.operations)
        //this.basicChart(this.pltx, this.plty);
      },
      error => {
        //console.log(error);
      }
    )
  }
  basicChart(xa: string[], ya: string[]){
    const element = this.el.nativeElement
    var xlst: number[] = new Array();
    var ylst: number[] = new Array();
    //console.log(xa.length);
    for (let i = 0; i < xa.length; i++){
      xlst.push(parseInt(xa[i],10));
      ylst.push(parseInt(ya[i],10));
    }
    //console.log(xlst,ylst);
    const data=[{
      x:xlst,
      y:ylst
    }]
    const style={
      margin:{t:0}
    }
    Plotly.plot(element,data,style)
  }
  
}
