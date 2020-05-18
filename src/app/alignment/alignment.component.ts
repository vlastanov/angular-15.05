import { Component, OnInit } from "@angular/core";
import {
  NgModel,
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ValidatorFn
} from "@angular/forms";

@Component({
  selector: "app-alignment",
  templateUrl: "./alignment.component.html",
  styleUrls: ["./alignment.component.css"]
})
export class AlignmentComponent implements OnInit {
  broadeningLaneForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  save(){
    console.log(this.broadeningLaneForm.value);
  }

  ngOnInit() {
    this.broadeningLaneForm = this.fb.group(
      {
        laneWidth: 6.5 ,
        radiusPr: 150 
      }
    );
  }
}


