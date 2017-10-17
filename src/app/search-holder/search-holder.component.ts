import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-holder',
  templateUrl: './search-holder.component.html',
  styleUrls: ['./search-holder.component.css']
})
export class SearchHolderComponent {

  @Input()
  public logo: string;

  @Input()
  public searchPlaceholder: string;

}
