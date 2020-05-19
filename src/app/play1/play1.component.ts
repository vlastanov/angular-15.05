import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-play1',
  templateUrl: './play1.component.html',
  styleUrls: ['./play1.component.css']
})
export class Play1Component implements OnInit {
  color = "yellow";
  constructor() { }

  ngOnInit() {
  }

}