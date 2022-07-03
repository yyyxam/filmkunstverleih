import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  params = new HttpParams()
    .set('test', 'TESTparam');
  constructor(public http: HttpClient) {
  }

  updateUname(data) {
    console.log("calling updateUname.php");
    return this.http.post('http://localhost/fk/updateUname.php', data);
  };

  search(searchParams) {
    let keyword: string;
    let sql: string;
    //console.log("calling search.php with searchparams:");
    //console.log(searchParams);
    //TODO: multiple select

  //TODO: ordentlichen Entscheidungsbaum
  // better way of checking for values?
    switch ( searchParams['titel'].length > 0) {
      case true:
        switch (searchParams['genre'].length > 0) {
          case true:
            switch (searchParams['sprache'].length > 0) {
              case true:    // Aktive Parameter: TITEL, GENRE, SPRACHE
                console.log("Aktive Parameter: TITEL, GENRE, SPRACHE");
                // actual query:
                // TODO
                break;
              case false:   // Aktive Parameter: TITEL und GENRE
                console.log("Aktive Parameter: TITEL und GENRE");
              // actual query:
                // TODO
                keyword = '\'%' + searchParams['titel'] + '%\'';
                sql = 'SELECT f.verleih_titel, fg.filmid, fg.genreId FROM film as f INNER JOIN film_genre AS fg ON f.filmid = fg.filmid LEFT JOIN genre AS g ON fg.genreId=g.genreId WHERE g.genreid = ' + searchParams['genre'] + ' AND f.verleih_titel LIKE ' + keyword + ';';
                return this.http.get('http://localhost/fk/search.php/?sql=' + sql);
            }
            break;
          case false:
            switch (searchParams['sprache'].length > 0) {
              case true:    // Aktive Parameter: TITEL und SPRACHE
                console.log("Aktive Parameter: TITEL und SPRACHE");
                // actual query:
                // TODO

              case false:   // Aktive Parameter:  TITEL
                console.log("Aktive Parameter:  TITEL");
                console.log("Only looking foor keyboard input");
                keyword = '\'%' + searchParams['titel'] + '%\'';
                sql = 'SELECT f.verleih_titel, f.filmid FROM film as f WHERE f.verleih_titel LIKE ' + keyword + ';';
                console.log(sql);
                return this.http.get('http://localhost/fk/search.php/?sql=' + sql);
            }
        }
        break;
      case false:
        switch (searchParams['genre'].length > 0) {
          case true:
            switch (searchParams['sprache'].length > 0) {
              case true:    // Aktive Parameter: GENRE und SPRACHE
                console.log("Aktive Parameter: GENRE und SPRACHE");
                // actual query:
                // TODO
                break;
              case false:   // Aktive Parameter: GENRE
                console.log("Aktive Parameter: GENRE");
                sql = 'SELECT f.verleih_titel, fg.filmid, fg.genreId FROM film as f INNER JOIN film_genre AS fg ON f.filmid = fg.filmid LEFT JOIN genre AS g ON fg.genreId=g.genreId WHERE g.genreid = ' + searchParams['genre'];
                return this.http.get('http://localhost/fk/search.php/?sql=' + sql);
            }
            break;
          case false:
            switch (searchParams['sprache'].length > 0) {
              case true:    // Aktive Parameter: Sprache
                console.log("Aktive Parameter: Sprache");
                console.log("Only looking for language input");
                // TODO
                //wrong query
                sql = 'SELECT f.verleih_titel, fg.filmid FROM film as f WHERE f.verleih_titel LIKE ' + searchParams['sprache']; //from film
                return this.http.get('http://localhost/fk/search.php/?sql=' + sql);
              case false:   // = KEIN PARAMETER AKTIV
                console.log("Aktive Parameter: -");
                //sollte nur erreicht werden, wenn Filter zurückgesetzt werden
                // TODO Anzeige zurücksetzen?
              break;
            }
        }
        break;
    }


  };

  getAllMovies() {
    console.log("calling getAllMovies.php");
    return this.http.get('http://localhost/fk/getAllMovies.php');
  };
}

