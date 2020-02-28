import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  private result: string;
  constructor( private route: ActivatedRoute,
               private searchService: SearchService  ) { }
  
  ngOnInit() {
    const keyword = this.route.snapshot.paramMap.get("keyword");
    const result = this.searchService.searchJson(keyword);
    result.subscribe( (data: any) => {
      this.result = JSON.stringify(data);
    })
    
  }

}
