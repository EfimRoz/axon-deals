import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EbayService {

  constructor(private http: HttpClient) { }

  public searchJson(keyword: string): Observable<any> {
    const url = `https://2btgsxpsm0.execute-api.us-east-1.amazonaws.com/dev/ebay_it?userName=ebay_it&password=ebay&q=${keyword}`;
    const answer = this.http.get(url);
    return answer;
  }
}
