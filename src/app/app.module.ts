import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './components/user/user.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SlidesComponent } from './components/slides/slides.component';

import { SwiperDirectiveDirective } from './directives/swiper-directive.directive';
import { BannersComponent } from './components/banners/banners.component';
import { CompanyLogoComponent } from './components/company-logo/company-logo.component';
import { NewComponent } from './components/new/new.component';
import { CardComponent } from './components/card/card.component';
import { CardDirectiveDirective } from './directives/card-directive.directive';
import { CatalogMenuComponent } from './components/catalog-menu/catalog-menu.component';
import { PlayerComponent } from './components/player/player.component';

import { InputComponent } from './shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SlidesComponent,
    SwiperDirectiveDirective,
    BannersComponent,
    CompanyLogoComponent,
    NewComponent,
    CardComponent,
    CardDirectiveDirective,
    CatalogMenuComponent,
    PlayerComponent,

    InputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
