import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    DropdownInputComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropdownInputComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
