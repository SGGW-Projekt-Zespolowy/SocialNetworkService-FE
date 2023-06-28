import { Component, Input } from '@angular/core';
import { ConfirmModalService } from 'src/app/services/confirm-modal.service';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  @Input() message

  constructor(
    public confirmModalService: ConfirmModalService 
  ) {}
}
