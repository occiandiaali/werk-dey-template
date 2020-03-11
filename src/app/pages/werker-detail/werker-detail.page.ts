import { WerkerService } from './../../services/werker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-werker-detail',
  templateUrl: './werker-detail.page.html',
  styleUrls: ['./werker-detail.page.scss'],
})
export class WerkerDetailPage implements OnInit {

  information: any;

  constructor(private activatedRoute: ActivatedRoute, private werkerService: WerkerService) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
 
    // Get the information from the API
    this.werkerService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

} // class
