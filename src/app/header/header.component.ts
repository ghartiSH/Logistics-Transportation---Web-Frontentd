import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequestComponent } from '../pages/request/request.component';
import { TrackingComponent } from '../pages/tracking/tracking.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(RequestComponent);
  }

  openTracking(){
    this.dialog.open(TrackingComponent);
  }

}
