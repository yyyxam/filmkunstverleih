import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmContentPageRoutingModule } from './film-content-routing.module';

import { FilmContentPage } from './film-content.page';

import { SwiperModule } from 'swiper/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmContentPageRoutingModule,
    SwiperModule,
   
  ],
  declarations: [FilmContentPage]
})
export class FilmContentPageModule {}


