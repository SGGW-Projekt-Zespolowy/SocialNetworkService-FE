import { Component } from '@angular/core';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';

@Component({
  selector: 'app-control-section',
  templateUrl: './control-section.component.html',
  styleUrls: ['./control-section.component.scss']
})
export class ControlSectionComponent {

  constructor(
    public popUpService: PostPopUpService
  ) {}
}
