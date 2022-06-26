import { Component, Input } from '@angular/core';
import {MultiDataSet, Label, Color} from "ng2-charts";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public color:Color[]=[
    {backgroundColor:['#6857E6', '#009FEE','#F02059']}
  ];
  /*INPUT*/
  @Input('labels') doughnutChartLabels: Label[] = [ 'label1', 'label2', 'label3' ];
  @Input() tittle: string= "Sin título";
  @Input('data') doughnutChartData: MultiDataSet = [
    [ 350, 450, 100 ],
  ];
}
