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
import { NewComponent } from './components/new/new.component';
import { CardComponent } from './components/card/card.component';
import { CardDirectiveDirective } from './directives/card-directive.directive';
import { CatalogMenuComponent } from './components/catalog-menu/catalog-menu.component';
import { PlayerComponent } from './components/player/player.component';
import { LogInComponent } from './components/user/log-in/log-in.component';

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
    NewComponent,
    CardComponent,
    CardDirectiveDirective,
    CatalogMenuComponent,
    PlayerComponent,
    LogInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
