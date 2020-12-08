import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { AppService } from '../app.servie'
import { CustomvalidationService } from "../customvalidation.service"


export interface PeriodicElement {
  Id: number;
  Name: String;
  Email: string;
  UserName: string;
  Action:String
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  

  
  
  registerForm: FormGroup;
  submitted = false;
  isDesc: boolean = false;
  column: string = 'Name';

  form: any;
  indexValue: -1;
  val = ''
  t: any = [];
  tt: any = []
  name = "";
  editIndex = null
  constructor(private fb: FormBuilder, private translate: TranslateService, public service: AppService, private customValidator: CustomvalidationService) { }

  ngOnInit(): void {
    
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),

      })
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  loginUser() {
    console.log('index', this.indexValue);
    if (this.indexValue == -1 || this.indexValue == undefined) {
      this.t.push(this.registerForm.value);
      this.indexValue = -1;

    } else {
      this.t[this.indexValue].name = this.registerForm.value.name;
      this.t[this.indexValue].email = this.registerForm.value.email;
      this.t[this.indexValue].username = this.registerForm.value.username;

      this.indexValue = -1;
    }
    this.registerForm.reset()
  }
  showAll() {
    return this.tt = this.t;
  }
  update(i, data) {
    this.indexValue = i;

    this.editIndex = i
    this.registerForm.setValue(this.showAll()[this.indexValue])
  }
  delete(i) {
    console.log(i)
    this.t.splice(i)

  }



}
