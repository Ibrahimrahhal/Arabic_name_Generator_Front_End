import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs/";
import {names} from './names.interface';
// import 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class NamesService {


  _url = "http://arabic-name-generator.herokuapp.com/";
  constructor(private http:HttpClient) {
  }
  public getNames()
  {
    return this.http.get<names>(this._url);


  };

}
