import { LoaderService } from './../../../loader/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public LoaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
