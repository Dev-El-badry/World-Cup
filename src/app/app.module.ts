import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//import pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

//import components
import { ComponentsLoginFormComponent } from '../components/components-login-form/components-login-form';
import { ComponentsRegisterFormComponent } from '../components/components-register-form/components-register-form';

//import firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CREDENTIALS } from './firebaseCredentails.interface';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    ComponentsLoginFormComponent,
    ComponentsRegisterFormComponent,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    ComponentsLoginFormComponent,
    ComponentsRegisterFormComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
