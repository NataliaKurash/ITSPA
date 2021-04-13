import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private url = 'http://localhost:3000/ingredients';

  constructor(private httpClient: HttpClient) { }

  public getIngredients(){
    return this.httpClient.get(this.url).toPromise();
  }

}
