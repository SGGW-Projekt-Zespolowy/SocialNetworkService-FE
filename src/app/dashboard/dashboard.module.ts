import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './posts-section/post/post.component';
import { PostsSectionComponent } from './posts-section/posts-section.component';
import { FriendsSectionComponent } from './friends-section/friends-section.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostComponent,
    PostsSectionComponent,
    FriendsSectionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
