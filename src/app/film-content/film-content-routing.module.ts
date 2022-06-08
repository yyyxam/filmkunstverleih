import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmContentPage } from './film-content.page';



const routes: Routes = [
  {
    path: '',
    component: FilmContentPage
  },
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmContentPageRoutingModule {}
