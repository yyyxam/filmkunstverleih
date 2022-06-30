import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  
  
  constructor() {}

  btnActivate(ionicCard) {
    if(ionicCard._color === 'secondary')
      ionicCard.color =  'tertairy';
    else
      ionicCard.color = 'tertairy';
  }

 
}


