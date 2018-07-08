import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthFacade } from '../../facades';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private authFacade: AuthFacade
  ) { }

  ngOnInit() {
  }

  signUp(event) {
    this.authFacade.signUp(event)
                .subscribe((res) => {
                  console.log(res, 'in component')
                })
  }

}
