import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    DropdownInputComponent,
    NavbarComponent,
    SearchBarComponent
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
