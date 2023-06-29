import { Injectable } from '@angular/core';
import { EMPTY, Subject, empty, filter, finalize, of, switchMap, take, takeWhile, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {

  isConfirmModalVisible = new Subject<boolean>()
  private isConfirmedSubject = new Subject<boolean>()

  constructor() { }

  openConfirmModal() {
    return of(null).pipe(
      tap(res => this.isConfirmModalVisible.next(true)),
      switchMap(res => this.isConfirmedSubject),
      take(1),
      takeWhile(res => res === true),
      finalize(() => this.isConfirmModalVisible.next(false))
    )
  }

  reject() {
    this.isConfirmedSubject.next(false);
  }

  approve() {
    this.isConfirmedSubject.next(true);
  }
}
