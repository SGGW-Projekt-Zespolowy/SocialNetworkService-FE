import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserDetailedResolver } from './guards/user-detailed.resolver';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'registration', loadChildren: () => import('./auth/registration/registration.module').then(m => m.RegistrationModule) },
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]},
  { path: 'profile', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule), canActivate: [AuthGuard], resolve: { userDetailed: UserDetailedResolver }},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
