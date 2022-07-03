import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';


// TODO clean up sql tries


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

 data= 'abc';
 email= 'abc@gmail.com';
 kundenNummer= '123456';
  search: object;
  titel: any;
  regie: any;

  constructor(private alertController: AlertController, public _apiService: ApiService) {

  }

  showPrompt() {
    this.alertController.create({
      header: 'Gib deinen Namen an',
      inputs: [
        {

          name: 'Test',
          placeholder: 'Name'

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

  showPrompt2() {
    this.alertController.create({
      header: 'Gib deine Email an',
      inputs: [
        {

          name: 'Email',
          placeholder: 'Email'


        },
      ],
      buttons: [
        {
          text: 'Abbrechen',
          handler: (email: any) => {
            console.log('Canceled', email);
          }
        },
        {
          text: 'Speichern!',
          handler: (email: any) => {
            console.log('Saved Information', email);
            this.email= email.Email;
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }


  showPrompt3() {
    this.alertController.create({
      header: 'Gib deine Email an',
      inputs: [
        {

          name: 'Nummer',
          placeholder: 'Kundennummer'


        },
      ],
      buttons: [
        {
          text: 'Abbrechen',
          handler: (kundenNummer: any) => {
            console.log('Canceled', kundenNummer);
          }
        },
        {
          text: 'Speichern!',
          handler: (kundenNummer: any) => {
            console.log('Saved Information', kundenNummer);
            this.kundenNummer= kundenNummer.Nummer;
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

}
