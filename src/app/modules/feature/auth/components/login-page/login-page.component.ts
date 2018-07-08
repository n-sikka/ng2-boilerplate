import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthFacade } from '../../facades';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private authFacade: AuthFacade
  ) { }

  ngOnInit() {
  }

  login(event: any) {
    this.authFacade.login(event.data).subscribe((res) => {
      if (res) {
        this.router.navigate(['/dashboard'])
      } else {
        alert('invalid ID password!')
      }
    });
  }

}
