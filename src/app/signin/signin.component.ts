import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {
  text = 'Insurance\n and Investment';
  showAlert = false;
  //@ts-ignore
  form: FormGroup;
  submitted = false;
  email = '';
  password = '';
  recoveredEmail = false;
  constructor(private fB: FormBuilder, private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.recoveredEmail = true;
      //@ts-ignore
      this.email = this.router.getCurrentNavigation()?.extras.state?.email;
    }
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    console.log('init....');
    this.form = this.fB.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) return;
  }
}
