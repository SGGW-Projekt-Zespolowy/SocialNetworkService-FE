import { Component } from '@angular/core';
import { MedicalConsts } from 'src/app/models/specializations.model';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  degrees = MedicalConsts.degrees;

  constructor(
    public contextService: ContextService
  ) { }
}