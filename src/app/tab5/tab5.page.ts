import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  

  constructor(
   
    private alertController: AlertController
  ) {}
  
  showPrompt() {
    this.alertController.create({
      header: 'Gib deinen Namen an',
      inputs: [
        {
          
          name: '',
          
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Done!',
          handler: (data: any) => {
            console.log('Saved Information', data);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  

}
