import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'mobile', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  ngOnInit():void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  mobile: number;
  email: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', mobile: 895621472, email: 'Hydrogen@aplus.com'},
  {position: 2, name: 'Helium', mobile: 9652314785, email: 'Helium@aplus.com'},
  {position: 3, name: 'Lithium', mobile: 632514885, email: 'Lithium@aplus.com'},
  {position: 4, name: 'Beryllium', mobile: 6325147852, email: 'Beryllium@aplus.com'},
  {position: 5, name: 'Boron', mobile: 965214852, email: 'Boron@aplus.com'},
  {position: 6, name: 'Carbon', mobile: 6952147851, email: 'Carbon@aplus.com'},
  {position: 7, name: 'Nitrogen', mobile: 6032147855, email: 'Nitrogen@aplus.com'},
  {position: 8, name: 'Oxygen', mobile: 9652148852, email: 'Oxygen@aplus.com'},
  {position: 9, name: 'Fluorine', mobile: 7541258955, email: 'Fluorine@aplus.com'},
  {position: 10, name: 'Neon', mobile: 8521475233, email: 'Neon@aplus.com'},
  {position: 11, name: 'Hydrogen', mobile: 895621472, email: 'Hydrogen@aplus.com'},
  {position: 12, name: 'Helium', mobile: 9652314785, email: 'Helium@aplus.com'},
  {position: 13, name: 'Lithium', mobile: 632514885, email: 'Lithium@aplus.com'},
  {position: 14, name: 'Beryllium', mobile: 6325147852, email: 'Beryllium@aplus.com'},
  {position: 15, name: 'Boron', mobile: 965214852, email: 'Boron@aplus.com'},
  {position: 16, name: 'Carbon', mobile: 6952147851, email: 'Carbon@aplus.com'},
  {position: 17, name: 'Nitrogen', mobile: 6032147855, email: 'Nitrogen@aplus.com'},
  {position: 18, name: 'Oxygen', mobile: 9652148852, email: 'Oxygen@aplus.com'},
  {position: 19, name: 'Fluorine', mobile: 7541258955, email: 'Fluorine@aplus.com'},
  {position: 20, name: 'Neon', mobile: 8521475233, email: 'Neon@aplus.com'},
];
