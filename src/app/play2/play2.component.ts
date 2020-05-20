
import {   OnInit ,  Component,} from "@angular/core";
import {  FormBuilder,  FormGroup,  AbstractControl,  Validators,  ValidatorFn} from "@angular/forms";
// import { Subscription } from "rxjs";
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
    let val = +c.value < min || +c.value > max || isNaN(+c.value);
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
})
export class Play2Component implements OnInit {

  customerForm: FormGroup;
  firstNameMessage: string;
  ratingErrors=''

  private validationMessages = {
    required: "Please enter your first name",
    minlength: "must be longer than 3 characters"
  };

  constructor(private fb: FormBuilder) {}

   ngOnInit(): void {
    this.customerForm = this.fb.group(
      {
        firstName: ["", ],
        lastName: [''], //{ value: "", disabled: false }
        ratingRange: [null],
        address: this.fb.group({
          city: ["", [Validators.required, Validators.minLength(3)]]
        })
      },
      { validator: compareValidator }
    );

    let firstname = this.customerForm.get("firstName");
    firstname.setValidators([Validators.required, Validators.minLength(3)]);
    firstname.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.setFirstName(firstname);
    });

    let lastName=this.customerForm.get('lastName')
    lastName.disable()

    let ratingRange=this.customerForm.get('ratingRange')
    ratingRange.setValidators([Validators.required,myValidator(0, 8)])
    ratingRange.valueChanges.subscribe(value=>{
      this.setRatingRagene(ratingRange)       
    })       
    // firstname.clearValidators()
    // firstname.updateValueAndValidity
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

  setRatingRagene(c: AbstractControl) {
    if((c.touched || c.dirty ) && c.errors){
              console.log(this.ratingErrors)
        }
        else{
          this.ratingErrors=''
        }
  }

  populateTestData() {
    let firstname = this.customerForm.get("firstName");
  }

  save() {
    console.log(this.customerForm);
    console.log("Saved: " + JSON.stringify(this.customerForm.value));
  }

}