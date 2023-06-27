import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostsSectionComponent } from './posts-section/posts-section.component';
import { FriendsSectionComponent } from './friends-section/friends-section.component';
import { ControlSectionComponent } from './control-section/control-section.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from '../posts/posts.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PostsSectionComponent,
    FriendsSectionComponent,
    ControlSectionComponent,
  ],
  imports: [
    PostsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class DashboardModule { }
