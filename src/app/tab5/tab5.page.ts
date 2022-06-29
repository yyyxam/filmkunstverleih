import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Observable} from 'rxjs';




@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  search: Observable<any>;
  titel: any;
  regie: any;

  constructor(private alertController: AlertController, ) {}

  addEntry(){
    let date = {
      titel: this.titel,
      regie: this.regie
    };
  }

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
