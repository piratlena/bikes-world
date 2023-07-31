import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './button/button.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { provideEnvironmentNgxMask, NgxMaskDirective } from 'ngx-mask';

@NgModule({
  declarations: [
    NavigationComponent,
    ButtonComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [
    NavigationComponent,
    ButtonComponent,
    TabComponent,
    TabsContainerComponent,
    InputComponent,
  ],
  providers: [provideEnvironmentNgxMask()],
})
export class SharedModule {}
