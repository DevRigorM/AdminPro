import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

/*componentes*/
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';

/*Modulos*/
import { ChartsModule } from "ng2-charts";



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  exports:[
    IncrementadorComponent,
    DonaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ]
})
export class ComponentsModule { }
