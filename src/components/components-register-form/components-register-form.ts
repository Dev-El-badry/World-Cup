import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

import { AngularFireDatabase  } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the ComponentsRegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-register-form',
  templateUrl: 'components-register-form.html'
})
export class ComponentsRegisterFormComponent implements OnInit {
  submitAttempt: boolean = false;
  users: Observable<any[]>;
  myForm: FormGroup;

  nickname: AbstractControl;
  firstName: AbstractControl;
  lastName: AbstractControl;
  emailUser: AbstractControl;
  pword: AbstractControl;
  confirm_pword: AbstractControl;
  phone: AbstractControl;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  user = {
    nickname: '',
    firstName: '',
    lastName: '',
    emailUser: '',
    pword: '',
    phone: '',
    confirm_pword: ''
  };

  constructor(public formBuilder: FormBuilder, private navCtrl: NavController, private db: AngularFireDatabase, private afAuth: AngularFireAuth ) {
    this.resetForm();
    
  }

  ngOnInit() {

    this.myForm = this.formBuilder.group({
      nickname: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailUser: ['', Validators.required],
     
      phone: ['', Validators.required],
     
        // passwords: this.formBuilder.group({
           pword: ['', Validators.required],
        // confirm_pword: ['', Validators.required]
        // }, {Validators: this.passwordConfirming})
    
    });

    this.nickname = this.myForm.controls['nickname'];
    this.firstName = this.myForm.controls['firstName'];
    this.lastName = this.myForm.controls['lastName'];
    this.emailUser = this.myForm.controls['emailUser'];
    this.pword = this.myForm.controls['pword'];
    //this.confirm_pword = this.myForm.controls['confirm_pword'];
    this.phone = this.myForm.controls['phone'];
  }

  passwordConfirming(c: AbstractControl): {invalid:boolean} {
    if(c.get('pword').value !== c.get('confirm_pword').value) {
      return {invalid: true};
    }
  }

  resetForm(form?: NgForm) {
    if(form != null)
    form.reset();

    this.user = {
      nickname: '',
      firstName: '',
      lastName: '',
      emailUser: '',
      pword: '',
      confirm_pword: '',
      phone: ''
    };
  }

  onSubmit(aform: NgForm) {

    this.afAuth.auth.createUserWithEmailAndPassword(aform.value.emailUser, aform.value.pword).then(res=> {
      this.db.list('/users').push({
        nickname: aform.value.nickname,
        firstname: aform.value.firstName,
        lastname: aform.value.lastName,
        email: aform.value.emailUser,
        phone: aform.value.phone,
      }).then(x=>{
        this.navCtrl.push(LoginPage);
        this.resetForm();
      }, (error)=> {
        console.log('Error! ', error);
      });
    });

 

  }




}
