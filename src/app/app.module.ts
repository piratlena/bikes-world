import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SlidesComponent } from './components/slides/slides.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { SwiperDirectiveDirective } from './directives/swiper-directive.directive';
import { BannersComponent } from './components/banners/banners.component';
import { CompanyLogoComponent } from './components/company-logo/company-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SlidesComponent,
    ButtonComponent,
    SwiperDirectiveDirective,
    BannersComponent,
    CompanyLogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
