import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './button/button.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ButtonComponent,
    TabsContainerComponent,
    TabComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavigationComponent,
    ButtonComponent,
    TabComponent,
    TabsContainerComponent,
  ],
})
export class SharedModule {}
