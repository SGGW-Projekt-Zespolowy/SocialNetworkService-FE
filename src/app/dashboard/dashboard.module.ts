import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './posts-section/post/post.component';
import { PostsSectionComponent } from './posts-section/posts-section.component';
import { FriendsSectionComponent } from './friends-section/friends-section.component';
import { ControlSectionComponent } from './control-section/control-section.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    DashboardComponent,
    PostComponent,
    PostsSectionComponent,
    FriendsSectionComponent,
    ControlSectionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class DashboardModule { }
