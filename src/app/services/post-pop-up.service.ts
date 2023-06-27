import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostPopUpService {

  isCreatePostVisible = new Subject<boolean>()
  isEditPostVisible = new Subject<boolean>();

  constructor() { }

  openCreatePostModal() {
    console.log('Open create')
    this.isCreatePostVisible.next(true);
  }
 
  closeCreatePostModal() {
    console.log('Close create')
    this.isCreatePostVisible.next(false);
  }

  openEditPostModal() {
    console.log('Open Edit')
    this.isEditPostVisible.next(true);
  }
 
  closeEditPostModal() {
    console.log('Close Edit')
    this.isEditPostVisible.next(false);
  }
}
