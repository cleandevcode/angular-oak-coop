import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResetEmailComponent } from './reset-email.component';

const routes: Routes = [
  {
    path: '',
    component: ResetEmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetEmailRoutingModule {}
