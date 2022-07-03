import {Component, ViewChild} from '@angular/core';
import {IonSearchbar} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('search', { static: false }) search: IonSearchbar;

  //list = Datenbank
  public list: Array<object> = [];
  public searchedItem: any;
  searchResult: object;
  private keyboardInput: string;
  private genreInput:  Array<string> = [];
  private langInput: Array<string> = [];
  private searchParams: object;


  constructor(public _apiService: ApiService) {
    this.searchParams = { titel: '', genre: '', sprache: '' };

  }


  updateList(list: object) {

  }



  movieSearch() {
    this._apiService.search(this.searchParams)
      .toPromise().then((data => {
      this.searchResult = data;
      this.updateList(data);

    }));
  };

//searchbar-input-based search
  //ausgelöst, wenn sich der input ändert

  _ionChange(event): void{
    this.keyboardInput = event.target.value;
    this.searchParams['titel'] = this.keyboardInput;
    this.movieSearch();
  };

  //filter-tag-based-search
  //ausgelöst, wenn filter bestätigt wird, oder wenn Tag gelöscht wird

  onGenreFilter(event): void{
    this.genreInput = event.target.value;
    this.searchParams['genre'] = this.genreInput;
    this.movieSearch();
  };

  onLangFilter(event): void {
    this.langInput = event.target.value;
    this.searchParams['sprache'] = this.langInput;
    this.movieSearch();
  };

  getAllMovies() {
    this._apiService.getAllMovies().toPromise().then((data => {
      console.log(data);
      //this.searchParams = data;
    }));
  };



}
