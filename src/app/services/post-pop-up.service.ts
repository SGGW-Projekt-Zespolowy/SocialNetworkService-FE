import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostPopUpService {

  isCreatePostVisible = new Subject<boolean>()
  isEditPostVisible = new Subject<PostModel>();
  isPostDetailsVisible = new Subject<PostModel>();
  isImagesPreviewVisible = new Subject<string[]>();

  constructor() { }

  openCreatePostModal() {
    this.isCreatePostVisible.next(true);
  }
 
  closeCreatePostModal() {
    this.isCreatePostVisible.next(false);
  }

  openEditPostModal(data: PostModel) {
    this.isEditPostVisible.next(data);
    this.closePostDetailsModal();
  }
 
  closeEditPostModal() {
    this.isEditPostVisible.next(null);
  }

  openPostDetasilsModal(data: PostModel) {
    this.isPostDetailsVisible.next(data);
  }
 
  closePostDetailsModal() {
    this.isPostDetailsVisible.next(null);
  }

  openImagesPreviewModal(images: string[]) {
    this.isImagesPreviewVisible.next(images);
  }
 
  closeImagesPreviewModal() {
    this.isImagesPreviewVisible.next(null);
  }
}
