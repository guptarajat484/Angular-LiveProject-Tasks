import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup } from '@angular/forms';
import { accounts } from '../../assets/accounts'
export interface PeriodicElement {
  Date: string;
  outputs: string;
  Invoices: string;
  Balance: string;
  Wallet: number;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  ELEMENT_DATA = accounts[0].accountData
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;



  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['Date', 'outputs', 'Invoices', 'Balance', 'Wallet'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);


  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  get fromDate() { return this.filterForm.get('fromDate').value; }
  get toDate() { return this.filterForm.get('toDate').value; }

  constructor() { }

  applyFilter() {
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.fromDate && this.toDate) {
        return data.Wallet >= this.fromDate && data.Wallet <= this.toDate;
      }
      return true;
    }
    this.dataSource.filter = '' + Math.random();
    this.filterForm.reset()
  }



  public doFilter = (value: string) => {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
