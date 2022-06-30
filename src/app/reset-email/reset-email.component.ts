import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.scss'],
})
export class ResetEmailComponent implements OnInit {
  title = 'Recover email';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['/sign-in'], { state: { email: 'test@test.com' } });
  }
}
