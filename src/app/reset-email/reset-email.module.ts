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

import { ResetEmailRoutingModule } from './reset-email-routing.module';
import { ResetEmailComponent } from './reset-email.component';

@NgModule({
  declarations: [ResetEmailComponent],
  imports: [
    CommonModule,
    AvatarModule,
    BlockModule,
    CardModule,
    ExpandableModule,
    ExpandableContainerModule,
    LinkModule,
    TagModule,
    ResetEmailRoutingModule,
    InputModule,
    CheckboxModule,
    ButtonModule,
    AlertModule,
    IconModule,
  ],
})
export class ResetEmailModule {}
