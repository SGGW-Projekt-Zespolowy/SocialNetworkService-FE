import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
    declarations: [
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        SharedModule,
        AngularSvgIconModule.forRoot()
    ]
})
export class UserProfileModule { }
