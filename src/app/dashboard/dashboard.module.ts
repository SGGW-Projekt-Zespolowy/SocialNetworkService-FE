import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';
import { PostsSectionComponent } from './posts-section/posts-section.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PostComponent,
    PostsSectionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
