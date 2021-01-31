import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  constructor(
    private _Router: Router,
  ) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    AOS.init();
  }

  onStart() {
    this._Router.navigate(['/kit']);
  }

}
