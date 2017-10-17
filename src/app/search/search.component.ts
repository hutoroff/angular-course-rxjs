import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../common/service/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  public placeholder: string;

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
  }

  public find(query: string): void {
    if(query.length !== 0) {
      this._searchService.find(query);
    }
  }

}
