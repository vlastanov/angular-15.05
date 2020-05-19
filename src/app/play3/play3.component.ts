import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-play3",
  templateUrl: "./play3.component.html",
  styleUrls: ["./play3.component.css"]
})
export class Play3Component implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });

    this.route.paramMap.subscribe(params => {
      // console.log(params.get('id'))
      console.log(params);
    });
    this.route.params.subscribe(params => {
      console.log(params.id);
    });
    // this.router.navigate(["../play2", { relativeTo: this.route }], {
    //   queryParams: { popular: "newPop" },
    //   queryParamsHandling: "merge"
    // });

    // up one level
    // this.router.navigate(["../../parent"], { relativeTo: this.route });
    // // Stays at the current level
    // this.router.navigate(["../sibling"], { relativeTo: this.route });
    // // Moves down one level
    // this.router.navigate(["./child"], { relativeTo: this.route });
  }
}