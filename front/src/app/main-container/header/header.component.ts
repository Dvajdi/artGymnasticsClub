import { Component, OnInit } from '@angular/core';
import {HeaderService} from './header.service';
import {RoutItem} from '../../shared/models/routItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private headerService:HeaderService) {

  }

  headers: RoutItem[];

  ngOnInit() {
    this.headers = this.headerService.getHeaderNames();
  }

}
