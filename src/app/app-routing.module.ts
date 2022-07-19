import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './register/register/register.component';
import { VerifyComponent } from './register/verify/verify.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'verify',
    component: VerifyComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { hideNavbar: true }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
