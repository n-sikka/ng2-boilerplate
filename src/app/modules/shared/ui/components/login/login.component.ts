import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @Output() onformSubmit = new EventEmitter();
  user: any = {};
  checkMe: boolean;
  invalidSubmission: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.isValid(this.user)) {
      this.invalidSubmission = true
    }
    this.onformSubmit.emit({
      data: this.user
    })
  }

  isValid(user): boolean {
    return user.email && user.password;
  }


}
