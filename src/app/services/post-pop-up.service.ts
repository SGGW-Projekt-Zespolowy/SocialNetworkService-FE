import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostPopUpService {

  isCreatePostVisible = new Subject<boolean>()

  constructor() { }

  openCreatePostModal() {
    this.isCreatePostVisible.next(true);
  }
 
  closeCreatePostModal() {
    this.isCreatePostVisible.next(false);
  }
}
