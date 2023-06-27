import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: ImageInputComponent
    }
  ]
})
export class ImageInputComponent implements ControlValueAccessor {

  //images: File[] = [];
  images: string[] = [];
  acceptedFormats = ["image/jpg", "image/png", "image/gif"];

  // onInputChange(imagesEvent) {
  //   const files: FileList = imagesEvent.target.files;

  //   for(let i = 0; i < files.length; i++) {
  //     const file = files.item(i);

  //     const isExist = this.acceptedFormats.includes(file.type);
  //     if(isExist) {
  //       this.images.push(file);
  //     }
  //   }
  //   this.onChange(this.images);
  //   this.onTouched();
  // }

  onInputChange(imagesEvent) { 
    const files: FileList = imagesEvent.target.files;

    for(let i = 0; i < files.length; i++) {
      const file = files.item(i);

      const isExist = this.acceptedFormats.includes(file.type);
      if(isExist) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
        const srcData = fileReader.result;
        this.images.push(`${srcData}`)
        this.onChange(this.images);
        this.onTouched();
        };
        fileReader.readAsDataURL(file);
      }
    }

  }
  
  deleteImage(id: number) {
    this.images.splice(id, 1);
    this.onChange(this.images);
    this.onTouched();
  }

  onChange = (title) => {}
  onTouched = () => {}
  disabled: boolean = false;
  
  // writeValue(images: File[]): void {
  //   this.images = images;
  // }

  writeValue(images: string[]): void {
    this.images = images;
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
