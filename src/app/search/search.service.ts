import { Injectable } from '@angular/core';
import { EbayService } from './ebay/ebay.service';
import { Observable, forkJoin } from 'rxjs';
import { AmazonService } from './amazon/amazon.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private ebayService: EbayService, 
    private amazonService: AmazonService
    ) { }

  public searchJson(keyword: string): Observable<any> {
    let result:Observable<any>;
    if(environment.locale === 'it') {
      const amazon = this.amazonService.searchJson(keyword);
      const ebay = this.ebayService.searchJson(keyword);
      result = forkJoin([amazon, ebay]).pipe(map( results =>{
        const returnResult = [].concat(results[0], results[1]);
        return returnResult;
      }));
    }
    if(environment.locale === 'uk') {
      result = this.amazonService.searchJson(keyword);
    }
      return result;

  }
}
