import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AngularFireDatabase  } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the ComponentsLoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-login-form',
  templateUrl: 'components-login-form.html'
})
export class ComponentsLoginFormComponent {
displayed: boolean = false;
 users: Observable<any[]>;
  user = {
   
    emailUser: '',
    pword: ''
  };

  constructor(private fAuth: AngularFireAuth, private navCtrl: NavController, private alertCtrl: AlertController) {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null)
    form.reset();

    this.user = {
     
      emailUser: '',
      pword: ''
    };
  }

  onSubmit(form: NgForm) {
    this.fAuth.auth.signInWithEmailAndPassword(form.value.emailUser, form.value.pword).then(res=> {
      this.navCtrl.push(HomePage);
      this.resetForm();
    }, (error)=> {
     this.presentAlert();
      console.log('Error! ', error);
    });

   
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: 'Your Username Or Password Wrong, Try Again With Right Data',
      buttons: ['OK']
    });
    alert.present();
  }

}
