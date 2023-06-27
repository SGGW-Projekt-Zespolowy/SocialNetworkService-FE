import { Component, Input } from '@angular/core';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';

@Component({
  selector: 'app-image-preview-modal',
  templateUrl: './image-preview-modal.component.html',
  styleUrls: ['./image-preview-modal.component.scss']
})
export class ImagePreviewModalComponent {

  @Input() images: string[];
  currentImageIndex: number = 0;

  constructor(
    public popUpService: PostPopUpService
  ) {}

  nexImage() {
    if(this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  previousImage() {
    if(this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }
}
