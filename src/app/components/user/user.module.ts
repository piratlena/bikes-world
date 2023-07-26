import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [LogInComponent],
  imports: [CommonModule, SharedModule],
  exports: [LogInComponent],
})
export class UserModule {}
