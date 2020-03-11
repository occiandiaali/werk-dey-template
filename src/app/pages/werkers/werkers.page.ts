// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-werkers',
//   templateUrl: './werkers.page.html',
//   styleUrls: ['./werkers.page.scss'],
// })
// export class WerkersPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// } // class

import { WerkerService, SearchType } from './../../services/werker.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-werkers',
  templateUrl: './werkers.page.html',
  styleUrls: ['./werkers.page.scss'],
})
export class WerkersPage implements OnInit {
 
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param werkerService The movie Service to get data
   */
  constructor(private werkerService: WerkerService) { }
 
  ngOnInit() { }
 
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.werkerService.searchData(this.searchTerm, this.type);
  }
}
