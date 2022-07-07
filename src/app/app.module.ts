import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const oktaDomain = 'oktadev.cooperators.ca';
const config = {
  issuer: `https://${oktaDomain}/oauth2/default`,
  clientId: '0oa17p1e4gmCiudNH0h8',
  redirectUri: window.location.origin + '/sign-in/callback',
};

const oktaAuth = new OktaAuth(config);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OktaAuthModule,
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      useValue: { oktaAuth },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
