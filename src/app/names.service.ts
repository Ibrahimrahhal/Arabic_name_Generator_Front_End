import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/observable';
@Injectable({
  providedIn: 'root'
})
export class NamesService {
  url = "/";
  constructor(private http:HttpClient) {
  }
  public getNames()
  {
    return this.http.get<string[]>(this.url);


  };

}
