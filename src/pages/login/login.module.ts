import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ComponentsLoginFormComponent } from './../../components/components-login-form/components-login-form';
@NgModule({
  declarations: [
    LoginPage,
    ComponentsLoginFormComponent
  ],
  imports: [
  
  IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
