import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {
  protected results: [];
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
    ) { }

  ngOnInit() {
    this.initVariables();
    const keyword = this.route.snapshot.paramMap.get("keyword");
    if(keyword) {
      const result = this.searchService.searchJson(keyword);
      result.subscribe( (data: any) => {
        this.results = data;
        console.log(data);
      })
    }
    
    
  }

  private initVariables(): void {
    this.results = [];
  }
}
