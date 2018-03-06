import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { ComponentsRegisterFormComponent } from './../../components/components-register-form/components-register-form';
@NgModule({
  declarations: [
    RegisterPage,
    ComponentsRegisterFormComponent
  ],
  imports: [

  IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {}
