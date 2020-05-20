import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-play3",
  templateUrl: "./play3.component.html",
  styleUrls: ["./play3.component.css"]
})
export class Play3Component implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
     // this.router.navigate(["../play2", { relativeTo: this.route }], {
    //   queryParams: { popular: "newPop" },
    //   queryParamsHandling: "merge"
    // });
    this.route.queryParams.subscribe(params => {
    });

    this.route.paramMap.subscribe(params => {
    });
    this.route.params.subscribe(params => {
    });   

    // up
    // this.router.navigate(["../../parent"], { relativeTo: this.route });

    //  current level
    // this.router.navigate(["../sibling"], { relativeTo: this.route });

    // // Moves down
    // this.router.navigate(["./child"], { relativeTo: this.route });
  }
}
