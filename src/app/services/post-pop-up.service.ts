import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostPopUpService {

  isCreatePostVisible = new Subject<boolean>()
  isEditPostVisible = new Subject<boolean>();
  isPostDetailsVisible = new Subject<PostModel>();

  constructor() { }

  openCreatePostModal() {
    this.isCreatePostVisible.next(true);
  }
 
  closeCreatePostModal() {
    this.isCreatePostVisible.next(false);
  }

  openEditPostModal() {
    this.isEditPostVisible.next(true);
    this.closePostDetailsModal();
  }
 
  closeEditPostModal() {
    this.isEditPostVisible.next(false);
  }

  openPostDetasilsModal(data: PostModel) {
    this.isPostDetailsVisible.next(data);
  }
 
  closePostDetailsModal() {
    this.isPostDetailsVisible.next(null);
  }
}
