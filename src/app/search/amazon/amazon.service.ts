import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private http: HttpClient) { }

  public searchJson(keyword: string): Observable<any> {
    const url = `https://2btgsxpsm0.execute-api.us-east-1.amazonaws.com/dev/amazon_it?userName=amazon_it&password=amazon&keyword=${keyword}`;
    const answer = this.http.get(url).pipe(map( data => this.fitData(data)));
    return answer;
  }

  private fitData(data: any) {
    console.log('old shit:', data);
    const dataArray = data.offers;
    const fitArray = dataArray.map(product => {
      return {'unique': product.ASIN, 'title': product.product_title, url: product.product_url, 'imageURL': product.img};
    });
    return fitArray;
  }
}
