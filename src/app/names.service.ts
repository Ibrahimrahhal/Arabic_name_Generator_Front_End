import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

// import 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class NamesService {
  url = "../a-test.txt";
  http1:HttpClient;
  constructor(private http:HttpClient) {
    this.http1 = http;
  }
  public getNames()
  {
    return this.http1.get(this.url , { responseType: 'text', observe: 'response' });


  };

}
