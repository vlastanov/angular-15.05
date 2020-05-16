import { Component, OnInit } from '@angular/core';
import { str } from './htmlString'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component implements OnInit {
  form: FormGroup
  data: any[] = []
  regexTable = /<table.*?table>/mg;
  tangentEls = []
  CircularEls = []
  SpiralEls = []

  constructor(private fb: FormBuilder) { }

  openFile(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        var text = reader.result;
        console.log(text)
      }
      reader.readAsText(input.files[index], "UTF-8");
    };
  }

  get tableNumber() {
    return this.form.get('tableNumber')
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tableNumber: ''
    })
    this.getGroupTables()
    this.getTables()
    this.getRows()
    this.getCells()
    let [t, ...tablesGroup] = this.data
    let tables = tablesGroup[0].tables

    let count = 0
    tables.forEach(table => {
      let name = table.title
      if (name === 'Tangent Data') {
        count++;

        let cells = []
        table.rows.map(row => {
          cells = [...cells, ...row.cells]
          return row.cells
        })
        let length = cells[1]
        let course = cells[3]
        this.tangentEls.push(new TangentElement(count, name, length, course))
      }
      else if (name === 'Spiral Curve Data: clothoid') {
        count++;

        let cells = []
        table.rows.map(row => {
          cells = [...cells, ...row.cells]
          return row.cells
        })
        let length = cells[1]
        let course = cells[23]
        let radius = cells[5]
        let chord = cells[21]
        let theta = cells[9]
        let X = cells[13]
        let Y = cells[17]
        let lTan = cells[3]
        let sTan = cells[7]
        let P = cells[11]
        let K = cells[15]
        let A = cells[19]
        this.SpiralEls.push(new SpiralElement(count, name, length, course, radius, chord, theta, X, Y, lTan, sTan, P, K, A))


      }
      else if (name === 'Circular Curve Data') {
        // console.log('Circular Curve Data')

        let cells = []
        table.rows.map(row => {
          cells = [...cells, ...row.cells]
          return row.cells
        })
        let length = cells[7]
        let course = cells[17]
        let radius = cells[5]
        let chord = cells[15]
        let delta = cells[1]
        let midOrd = cells[11]
        let type = cells[3]
        let tangent = cells[9]
        let external = cells[13]
        count++;
        this.CircularEls.push(new CircularElement(count, name, length, course, radius, chord,
          delta, midOrd, type, tangent, external))

      }

    })
    console.log(this.tangentEls)
  }

  getGroupTables() {
    let fullText = str.replace(/(?:\r\n|\r|\n)/g, '')
    let groups = fullText.match(/<table.*?table>/g)
    groups.forEach(group => this.data.push({ text: group }))
  }

  getTables() {
    this.data.forEach((group, i) => {
      let tables = group.text.split(/<hr>/g)
      let horizRows = []
      tables.forEach(horizRow => {
        horizRows.push({ text: horizRow })
      })
      this.data[i].tables = horizRows
      delete this.data[i].text;
      // console.log(this.data[i].horizRows)
    })
  }

  getRows() {
    this.data.forEach((group, i) => {
      group.tables.forEach((table, j) => {
        let rows = []
        let title
        let result = table.text.match(/<tr.*?tr>/g)
        result?.forEach((row, k) => {
          if (k === 0) {
            title = { text: row }
          } else {
            return rows.push({ text: row })
          }
        })
        this.data[i].tables[j].titleText = title
        this.data[i].tables[j].rows = rows
        delete this.data[i].tables[j].text;
      })
    })
  }

  getCells() {
    this.data.forEach((group, i) => {
      group.tables.forEach((table, j) => {

        let titleCell = []
        let titles = table.titleText?.text.match(/<td.*?td>/g);
        titles?.forEach(cell => {
          cell = cell.replace(/<td.*?>|<\/td>|<b>|<\/b>|<u>|<\/u>/g, '')
          return titleCell.push(cell)
        })
        if (titles) {
          this.data[i].tables[j].title = titleCell[0]

        } else {
          this.data[i].tables[j].title = ''

        }
        delete this.data[i].tables[j].titleText;
      })
    })

    this.data.forEach((group, i) => {
      group.tables.forEach((table, j) => {

        table.rows.forEach((row, k) => {
          let cells = []
          let result = row.text.match(/<td.*?td>/g)
          result?.forEach(cell => {
            cell = cell.replace(/<td.*?>|<\/td>|<b>|<\/b>|<u>|<\/u>/g, '')
            return cells.push(cell)
          })
          this.data[i].tables[j].rows[k].cells = cells
          delete this.data[i].tables[j].rows[k].text;
        })
      })
    })

  }

  onSubmit() {

  }

}

export interface IGeometricElement {
  name: string
}

export class GeometricElement implements IGeometricElement {
  constructor(public count: number, public name: string) { }
}
export class TangentElement extends GeometricElement {

  get course() {
    let _course = this._course.replace('&deg;', '°')
    return _course
  }
  set course(value) {
  }
  constructor(public count: number, public name: string, public length: string, protected _course: string) {
    super(count, name)
  }
}

export class CurveElement extends TangentElement {
  constructor(public count: number, public name: string, public length: string, public course: string,
    public radius: string, public chord: string, ) {
    super(count, name, length, course)
  }
}

export class CircularElement extends CurveElement {

  get delta() {
    let delta = this._delta.replace('&deg;', '°')
    return delta
  }
  set delta(value) {
  }

  constructor(public count: number, public name: string, public length: string, public course: string,
    public radius: string, public chord: string,
    private _delta: string, public midOrd: string, public type: string, public tangent: string, public external) {
    super(count, name, length, course, radius, chord)
  }
}

export class SpiralElement extends CurveElement {
  get theta() {
    let theta = this._theta.replace('&deg;', '°')
    return theta
  }
  set theta(value) {
  }


  constructor(public count: number, public name: string, public length: string, public course: string,
    public radius: string, public chord: string,
    private _theta: string, public x: string, public y: string, public lTan: string, public sTan: string, public P: string, public K: string, public A: string) {
    super(count, name, length, course, radius, chord)
  }
}