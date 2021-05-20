import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coms-and-db',
  templateUrl: './coms-and-db.component.html',
  styleUrls: ['./coms-and-db.component.css']
})
export class ComsAndDbComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

    onIntervalFired(firedNumber: number)  {
    if (firedNumber % 2 ===0) {
      this.evenNumbers.push(firedNumber);
    }else {
      this.oddNumbers.push(firedNumber);
    }
  }
}



