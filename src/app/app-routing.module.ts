import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { SecureInnerPagesGuard } from './shared/guards/secure-inner-pages.guard';


const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
