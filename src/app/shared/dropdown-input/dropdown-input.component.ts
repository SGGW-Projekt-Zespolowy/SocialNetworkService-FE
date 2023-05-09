import { Component, HostListener, Input } from '@angular/core';
import { DropDownAnimation } from './animations';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss'],
  animations: [DropDownAnimation],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: DropdownInputComponent
    }
  ]
})

export class DropdownInputComponent implements ControlValueAccessor {
  isOpen = false;
  
  @Input() titles;
  
  selectedTitle: string;

  inside = false;

  @HostListener("click")
  clicked() {
    this.inside = true;
  }
  @HostListener("document:click")
  clickedOut() {
    if(!this.inside) {
      this.onTouched();
      this.isOpen = false;
    }
    this.inside = false;
  }

  onChange = (title) => {}
  onTouched = () => {}
  disabled: boolean = false;

  selectTitle(title: string) {
    this.selectedTitle = title;
    this.isOpen = false;
    this.onChange(title);
    this.onTouched();
  }
  
  writeValue(title: string): void {
    this.selectedTitle = title;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
