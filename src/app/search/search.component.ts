import {Component, Input} from '@angular/core';
import {SearchService} from "../common/service/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  public placeholder: string;

  constructor(private _searchService: SearchService) { }

  public find(query: string): void {
    if(query && query.length !== 0) {
      this._searchService.find(query);
    }
  }

  public findByButton(query: string): void {
    this.find(query);
  }

}
