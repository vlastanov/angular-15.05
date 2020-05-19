import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-play1',
  templateUrl: './play1.component.html',
  styleUrls: ['./play1.component.css']
})
export class Play1Component implements OnInit {
  color = "yellow";
  constructor(  private route: ActivatedRoute,) { }
  

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
    console.log(params)
      
    })

    this.route.paramMap.subscribe(params=>{
    // console.log(params.get('id'))
      console.log(params)


    })
    this.route.params.subscribe(params=>{
      console.log(params.id)
    })
    // this.route.navigate(['/products'], { queryParams: { order: 'popular' } });
  }

}