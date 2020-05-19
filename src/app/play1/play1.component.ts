import { Component, OnInit, VERSION} from '@angular/core';

@Component({
  selector: 'app-play1',
  templateUrl: './play1.component.html',
  styleUrls: ['./play1.component.css']
})
export class Play1Component implements OnInit {
 name = "Angular1 " + VERSION.major;
  color = "yellow";
  constructor() { }

  ngOnInit() {
  }

}