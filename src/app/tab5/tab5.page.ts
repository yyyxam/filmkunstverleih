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
  data= 'sss';
  search: object;
  titel = 'test_titel';
  regie: 'test_regie';

  constructor(private alertController: AlertController, public _apiService: ApiService) {

  }

  showPrompt() {
    this.alertController.create({
      header: 'Gib deinen Namen an',
      inputs: [
        {name: 'Test'},
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
            console.log("data-test ausgabe:");
            console.log(data.Test);
            //this.getAllMovies();
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  //testing
  getAllMovies() {
    this._apiService.getAllMovies().toPromise().then((data => {
      console.log(data);
      this.search = data;
    }));

  }



}
