import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngj8-button',
  templateUrl: './ngj8-button.component.html',
  styleUrls: ['./ngj8-button.component.scss']
})
export class Ngj8ButtonComponent implements OnInit {

  @Input() label: string = 'Button';

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  clicked: true | false = false;
  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.onClick.emit(true);
    this.clicked = true;
  }

}
