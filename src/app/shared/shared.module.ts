import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    DropdownInputComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  exports: [
    DropdownInputComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
