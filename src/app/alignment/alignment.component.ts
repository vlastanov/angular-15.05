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
  crossSectionForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  save(){
    console.log(this.crossSectionForm.value);
  }

  ngOnInit() {
    this.crossSectionForm = this.fb.group(
      {
        laneWidth: ["" ],
        radiusPr: ["" ],
      }
    );
  }
}
