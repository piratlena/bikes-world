import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [NavigationComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [NavigationComponent, ButtonComponent],
})
export class SharedModule {}
