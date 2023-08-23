import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>;

  @Input()
  set setColuns(arrayString: string[]){
    this.displayedColumns = arrayString;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
