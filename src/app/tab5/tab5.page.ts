import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  

  constructor(
   
    public alertCtrl: AlertController
  ) {}
  
   async showAlert(){
    const alert = await this.alertCtrl.create({
      header: "Gib deinen Namen an",
      inputs: [
        {type: 'text', placeholder: "Name"}
      ],
      buttons: [
        {text: "Speichern", handler: (res) => {
          console.log(res.promo);

        }
      },
      {
        text: "abbrechen"
      }
      ]

    }).then(res => res.present());
  }

  

}
