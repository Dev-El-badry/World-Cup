import { NgModule } from '@angular/core';
import { ComponentsLoginFormComponent } from './components-login-form/components-login-form';
import { ComponentsRegisterFormComponent } from './components-register-form/components-register-form';
@NgModule({
	declarations: [ComponentsLoginFormComponent,
    ComponentsRegisterFormComponent],
	imports: [],
	exports: [ComponentsLoginFormComponent,
    ComponentsRegisterFormComponent]
})
export class ComponentsModule {}
