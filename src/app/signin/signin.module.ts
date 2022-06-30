import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AvatarModule,
  BlockModule,
  CardModule,
  ExpandableContainerModule,
  ExpandableModule,
  LinkModule,
  TagModule,
  InputModule,
  CheckboxModule,
  ButtonModule,
  AlertModule
} from '@xdsystems/coop-library-angular';

import { SignInRoutingModule } from './signin-routing.module';
import { SignInComponent } from './signin.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    AvatarModule,
    BlockModule,
    CardModule,
    ExpandableModule,
    ExpandableContainerModule,
    LinkModule,
    TagModule,
    SignInRoutingModule,
    InputModule,
    CheckboxModule,
    ButtonModule,
    AlertModule
  ],
})
export class SignInModule {}
