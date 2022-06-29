import {Component, ViewChild} from '@angular/core';
import {IonSearchbar} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('search', { static: false }) search: IonSearchbar;

  //list = Datenbank
  public list: Array<Object> = [];
  public searchedItem: any;
  private keyboardInput: String;
  private genreInput:  Array<String> = [];
  private langInput: Array<String> = [];


  constructor(private http: HttpClient) {
    this.list = [
    { title: 'Less Than Zero', tags: ['drama'], lang: ['deutsch', 'englisch', 'spanisch']},
    { title: 'As it was', tags: ['sci-fi', 'horror'], lang: ['deutsch', 'spanisch']},
    { title: 'Privilege', tags: ['horror'], lang: ['deutsch']},
    { title: 'Red & Blue Pills', tags: ['comedy'], lang: ['spanisch']},
    { title: 'Take my Breath', tags: ['thriller', 'horror'], lang: ['deutsch', 'englisch', 'spanisch']}
  ];
    this.searchedItem = this.list;
  }





  movieSearch(): void {
    const genreIn = this.genreInput;
    const langIn = this.langInput;
    this.searchedItem = this.list;
    //KEYBOARD INPUT
    // DON'T filter IF the supplied input is an empty string
    if (this.keyboardInput && this.keyboardInput.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => (item.title.toLowerCase().indexOf(this.keyboardInput.toLowerCase()) > -1));
    }

    // if tags not empty, filter for them
    if (this.genreInput.length > 0){
      this.searchedItem = this.searchedItem.filter(function(item) {
      for (const genreTag of genreIn){
        if (item.tags.includes(genreTag)) {
          return true;
        }
      }
      });
    }

    if (this.langInput.length > 0){
      this.searchedItem = this.searchedItem.filter(function(item) {
        console.log(item.title);
        console.log(item.lang);

        for (const langTag of langIn){
          if (item.lang.includes(langTag)) {
            return true;
          }
        }
      });
    }

  }

//searchbar-input-based search
  //ausgelöst, wenn sich der input ändert

  _ionChange(event): void{
    this.keyboardInput = event.target.value;
    this.movieSearch();
  }

  //filter-tag-based-search
  //ausgelöst, wenn filter bestätigt wird, oder wenn Tag gelöscht wird

  onGenreFilter(event): void{
    this.genreInput = event.target.value;
    this.movieSearch();
  }

  onLangFilter(event): void {
    this.langInput = event.target.value;
    this.movieSearch();
  }

}
