import { Component, HostListener, Input } from '@angular/core';
import { DropDownAnimation } from './animations';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MedicalConsts } from 'src/app/models/specializations.model';

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
  @Input() placeholder: string = "";
  
  @Input() titles: {key: string, value: string}[];
  
  selectedTitle: {key: string, value: string};

  inside = false;
  touched = false;

  @HostListener("click")
  clicked() {
    this.inside = true;
    this.touched = true;
  }
  @HostListener("document:click")
  clickedOut() {
    if(!this.inside) {
      this.isOpen = false;

      if(this.touched) {
        this.onTouched();
      }
    }

    this.inside = false;
  }

  onChange = (title) => {}
  onTouched = () => {}
  disabled: boolean = false;

  selectTitle(title: {key: string, value: string}) {
    this.selectedTitle = title;
    this.isOpen = false;
    this.onChange(title);
    this.onTouched();
  }
  
  writeValue(titleValue: string): void {
    const title = this.titles.filter(x => x.key === title);
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
