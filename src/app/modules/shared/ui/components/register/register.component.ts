import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() onformSubmit = new EventEmitter();
  newUser: any = {};  
  passwordCheck: any;
  passwordMatch: boolean = false;
  invalidSubmission: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.isValid(this.newUser)) {
      this.invalidSubmission = true
    }
    this.onformSubmit.emit({
      data: this.newUser
    })
  }
  
  isValid(user): boolean {
    return user.firstName && user.lastName && user.email && user.password && (this.passwordMatch);
  }

  onRetypePassword(password) {
    console.log(password == this.newUser.password)
    this.passwordMatch = password == this.newUser.password

  }
}
