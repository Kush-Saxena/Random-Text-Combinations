import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RandomNameGenerator';

  firstList: string[];
  secondList: string[];

  _input1: string;
  _input2: string;

  randomGeneratedName: string;

  //Recalculate list data only if the data changes
  set input1(value: string) {
    this._input1 = value;
    this.RegenerateLists(1);
  }

  get input1(): string {
    return this._input1
  }

  get input2(): string {
    return this._input2
  }

  set input2(value: string) {
    this._input2 = value;
    this.RegenerateLists(2);
  }

  RegenerateLists(listNumber: number): void {


    if (listNumber == 1) {
      if (this.input1) {
        this.firstList = this.input1.split(",");
      }
      else { this.firstList = null } //Setting this null again so MakeRandomName() doesn't works with empty lists.

    }
    else if (listNumber == 2) {
      if (this.input2) {
        this.secondList = this.input2.split(",");
      }
      else { this.secondList = null }
    }
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  MakeRandomName(): void {
    if ((this.firstList) && (this.secondList)) {  //If any of lists is empty, this function won't work.
      var random1 = this.getRandomInt(this.firstList.length);
      var random2 = this.getRandomInt(this.secondList.length);

      this.randomGeneratedName = this.firstList[random1] + " " + this.secondList[random2];
    }

  }

}
