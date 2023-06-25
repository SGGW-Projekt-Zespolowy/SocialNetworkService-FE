import { Component } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  constructor(
    public contextService: ContextService
  ) { }
}