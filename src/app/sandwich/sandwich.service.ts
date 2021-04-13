import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sandwich } from './sandiwch';

@Injectable({
  providedIn: 'root'
})
export class SandwichService {

  private url = 'http://localhost:3000/sandwiches';
  constructor(private httpClient: HttpClient) { }

  public postSandwich(sandwich: Sandwich){
    return this.httpClient.post(this.url, sandwich).toPromise();
  }

  public getSandwiches(){
    return this.httpClient.get(this.url).toPromise();
  }

  public getSandwich(sandwichID: string): Promise<Sandwich>{
    return this.httpClient.get<Sandwich>(`${this.url}/${sandwichID}`).toPromise();
  }
}
