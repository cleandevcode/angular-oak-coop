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
  AlertModule,
  IconModule,
} from '@xdsystems/coop-library-angular';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    AvatarModule,
    BlockModule,
    CardModule,
    ExpandableModule,
    ExpandableContainerModule,
    LinkModule,
    TagModule,
    ResetPasswordRoutingModule,
    InputModule,
    CheckboxModule,
    ButtonModule,
    AlertModule,
    IconModule,
  ],
})
export class ResetPasswordModule {}
