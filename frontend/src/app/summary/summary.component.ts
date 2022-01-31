import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { saveAs } from 'file-saver';

export interface SummaryItem {
  name: string;
  car: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SummaryItem[] = [
  {name: 'Noemie', car: 'Dupont'},
  {name: 'Philomene', car: 'Dupont'},
  {name: 'Elouan', car: 'Dupont'},
];

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource(EXAMPLE_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'car'];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  print() {
    window.print();
  }

  // static convertArrayOfObjectsToCSV(args) : string {
  //   var result, ctr, keys, columnDelimiter, lineDelimiter, data;
  //
  //   data = args.data || null;
  //   if (data == null || !data.length) {
  //       return null;
  //   }
  //
  //   columnDelimiter = args.columnDelimiter || ',';
  //   lineDelimiter = args.lineDelimiter || '\n';
  //
  //   keys = Object.keys(data[0]);
  //
  //   result = '';
  //   result += keys.join(columnDelimiter);
  //   result += lineDelimiter;
  //
  //   data.forEach(function(item) {
  //       ctr = 0;
  //       keys.forEach(function(key) {
  //           if (ctr > 0) result += columnDelimiter;
  //
  //           result += item[key];
  //           ctr++;
  //       });
  //       result += lineDelimiter;
  //   });
  //
  //   return result;
  // }

  downloadCSV() {
    saveAs(new Blob(["Hello, world!"], { type: "data:text/csv;charset=utf-8" }), 'data.csv');
  }

}
