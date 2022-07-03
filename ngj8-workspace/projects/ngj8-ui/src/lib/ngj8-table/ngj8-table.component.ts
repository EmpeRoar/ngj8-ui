import { Component, Input, OnInit } from '@angular/core';
import { Ngj8Column } from './ngj8-column.model';

@Component({
  selector: 'ngj8-table',
  templateUrl: './ngj8-table.component.html',
  styleUrls: ['./ngj8-table.component.scss']
})
export class Ngj8TableComponent implements OnInit {

  @Input() columns: ReadonlyArray<any> = [];

  @Input() data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
