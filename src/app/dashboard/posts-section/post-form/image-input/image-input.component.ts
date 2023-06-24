import { Component } from '@angular/core';

@Component({
  selector: 'image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss']
})
export class ImageInputComponent {

  images: File[] = [];
  acceptedFormats = ["image/jpg", "image/png", "image/gif"];

  onInputChange(imagesEvent) {
    const files: FileList = imagesEvent.target.files;

    for(let i = 0; i < files.length; i++) {
      const file = files.item(i);

      const isExist = this.acceptedFormats.includes(file.type);
      if(isExist) {
        this.images.push(file);
      }
    }
  }
  
  deleteImage(id: number) {
    this.images.splice(id, 1);
  }
}
