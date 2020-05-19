
import {
   OnInit ,
  Component,
  VERSION,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild
} from "@angular/core";
import {
  NgModel,
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ValidatorFn
} from "@angular/forms";
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";


function ratingRange(c: AbstractControl) {
  let val = c.value < 0 || c.value > 5 || isNaN(c.value);
  if (c.value !== null && val) {
    return { outOfRange: true };
  }
  return null;
}

function myValidator(min: number, max: number): ValidatorFn {
  let rangeRes = function ratingRange(c: AbstractControl) {
    let val = c.value < min || c.value > max || isNaN(c.value);
    if (c.value !== null && val) {
      return { outOfRange: true };
    }
    return null;
  };

  return rangeRes;
}

function compareValidator(c: AbstractControl) {
  let firstName = c.get("firstName");
  let city = c.get("address.city");

  if (firstName.pristine || city.pristine) {
    return null;
  }
  if (firstName.value === city.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-play2',
  templateUrl: './play2.component.html',
  styleUrls: ['./play2.component.css']
})
export class Play2Component implements OnInit {

  customerForm: FormGroup;
  firstNameMessage: string;

  private validationMessages = {
    required: "Please enter your first name",
    minlength: "must be longer than 3 characters"
  };

 


  constructor(private fb: FormBuilder) {}


   ngOnInit(): void {
    this.customerForm = this.fb.group(
      {
        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: [{ value: "", disabled: true }],
        ratingRange: [null, [myValidator(0, 8)]],
        address: this.fb.group({
          city: ["", [Validators.required, Validators.minLength(3)]]
        })
      },
      { validator: compareValidator }
    );

    let firstname = this.customerForm.get("firstName");
    firstname.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.setFirstName(firstname);
    });
  }

  setFirstName(c: AbstractControl) {
    console.log(c.errors);
    this.firstNameMessage = "";
    if ((c.touched || c.dirty) && c.errors) {
      this.firstNameMessage = Object.keys(c.errors)
        .map(key => this.validationMessages[key])
        .join(" ");
    }
  }

  populateTestData() {
    let firstname = this.customerForm.get("firstName");
    // firstname.disable();
    // firstname.setValidators(Validators.required);
    // firstname.clearValidators()
    // firstname.updateValueAndValidity
  }

  save() {
    console.log(this.customerForm);
    console.log("Saved: " + JSON.stringify(this.customerForm.value));
  }

}