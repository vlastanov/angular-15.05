import { Component, VERSION,ViewChildren, QueryList,ElementRef,  ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular1 ' + VERSION.major;
  color = 'yellow'

  filter1: string;
  filter2: string; 
  @ViewChildren('divElem,nameElement') inputElementRefs: QueryList<ElementRef>
  @ViewChildren(NgModel) inputElementRefs2: QueryList<NgModel>


private _sub: Subscription
  private _filterInput: NgModel

  get filterInput(): NgModel {
    return this._filterInput
  }

  @ViewChild(NgModel)
  set filterInput(value: NgModel) {
    // console.log(value)
    this._filterInput = value;
    if (this.filterInput && !this._sub) {
      this._sub = this.filterInput.valueChanges.subscribe((changes) => {
        this.filter1=changes;
        return console.log(this.filter1)
      }
      )
    }
  }

  onFilter2(event: string) {
    this.filter2 = event
  }


}
