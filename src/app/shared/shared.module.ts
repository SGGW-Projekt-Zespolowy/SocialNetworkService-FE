import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarInputComponent } from './search-bar-input/search-bar-input.component';

@NgModule({
  declarations: [
    DropdownInputComponent,
    NavbarComponent,
    SearchBarComponent,
    SearchBarInputComponent
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
