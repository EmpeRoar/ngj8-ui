import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngj8-button',
  templateUrl: './ngj8-button.component.html',
  styleUrls: ['./ngj8-button.component.scss']
})
export class Ngj8ButtonComponent implements OnInit {

  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
