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

  search(data) {
    console.log("calling search.php");
    return this.http.get('http://localhost/fk/search.php');
    //TODO: query übergeben (abhängig von suchparametern)
  };

  getAllMovies() {
    console.log("calling getAllMovies.php");
    return this.http.get('http://localhost/fk/getAllMovies.php');
  };
}
