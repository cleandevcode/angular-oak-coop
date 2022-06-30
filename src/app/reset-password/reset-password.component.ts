import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  submitted = false;
  title = 'Recover password';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.submitted) {
      this.submitted = true;
      this.title = 'Sign in';
    } else {
      this.router.navigate(['/sign-in']);
    }
  }
}
