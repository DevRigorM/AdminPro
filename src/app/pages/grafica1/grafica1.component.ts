import { Component } from '@angular/core';
import {MultiDataSet, Label, Color} from "ng2-charts";

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  public labels1: string []=[ 'Pan', 'Refrescos', 'Comida' ];
  public data1: MultiDataSet = [
    [ 15, 30, 30 ],
  ];
}
