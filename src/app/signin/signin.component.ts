import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { AuthState, OktaAuth } from '@okta/okta-auth-js';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
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
  signInError = false;
  loading = false;

  public isAuthenticated$!: Observable<boolean>;

  constructor(
    private fB: FormBuilder,
    private router: Router,
    private _oktaStateService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.recoveredEmail = true;
      //@ts-ignore
      this.email = this.router.getCurrentNavigation()?.extras.state?.email;
      this.isAuthenticated$ = this._oktaStateService.authState$.pipe(
        filter((s: AuthState) => !!s),
        map((s: AuthState) => s.isAuthenticated ?? false)
      );
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

  public async login(): Promise<void> {
    this.signInError = false;
    if (this.email && this.password) {
      this.loading = true;
      await this._oktaAuth
        .signInWithCredentials({
          username: this.email,
          password: this.password,
        })
        .then((_) => {
          console.log('login success!!!');
          // this.router.navigate(['/dashboard'])
        })
        .catch((err) => {
          console.log('error>>>', err);
          this.signInError = true;
        })
        .finally(() => (this.loading = false));
    }
  }
}
