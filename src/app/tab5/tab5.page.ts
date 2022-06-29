import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  
 data= 'sss';
  constructor(
   
    private alertController: AlertController
  ) {}
  
  showPrompt() {
    this.alertController.create({
      header: 'Gib deinen Namen an',
      inputs: [
        {
          
          name: 'Test',

          
        },
      ],
      buttons: [
        {
          text: 'Abbrechen',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Speichern!',
          handler: (data: any) => {
            console.log('Saved Information', data);
            this.data= data.Test;
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  

}
