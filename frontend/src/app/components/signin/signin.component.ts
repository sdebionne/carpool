import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
        this.authService.login(val.email, val.password)
            .subscribe(
                () => {
                    console.log('User is logged in');
                    this.router.navigateByUrl('/');
                }
            );
    }
}

}
