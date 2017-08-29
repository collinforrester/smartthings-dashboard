import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdMenuModule,
  MdIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdIconModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdIconModule
  ],
  declarations: []
})
export class CustomAppMaterialModule { }
