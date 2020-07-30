import { Subscription } from 'rxjs';
import { RoutePath } from './../../core/enums/route.paths';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'eszsw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public subscription: Subscription[];
  public petsPath: string;
  public context: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    this.petsPath = RoutePath.HOME; 
  }

}
