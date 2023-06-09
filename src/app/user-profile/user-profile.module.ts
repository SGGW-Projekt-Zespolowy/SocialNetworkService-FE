import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        SharedModule
    ]
})
export class UserProfileModule { }
