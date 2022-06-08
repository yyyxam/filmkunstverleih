import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-film-content',
  templateUrl: './film-content.page.html',
  styleUrls: ['./film-content.page.scss'],
  

})
export class FilmContentPage implements OnInit {

  constructor(public router:Router) { }



  ngOnInit() {
  }

}
