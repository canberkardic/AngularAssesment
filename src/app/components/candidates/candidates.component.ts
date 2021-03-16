import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUser } from '../../models/IUser';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit, AfterViewInit {

  constructor(
    private _userService : UserService,
    private _router : Router
  ) { }



  @ViewChild(MatSort) sort: MatSort;


  loading : boolean = false;
  dataSource = new MatTableDataSource<IUser>()

  columnsToDisplay = ['name', 'username', 'email', 'phone', 'edit'];


  ngOnInit(): void {
    this.loading = true;
    this._userService.getAllUsers().subscribe((data) => {
      this.dataSource.data = data;
      
      this.loading = false;
    }, (err) =>{
      console.error(err);
      this.loading = false;
    })
  }

  ngAfterViewInit(): void {
    console.log(this.sort);
    this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }


  onDetailPressed(selectedUser){
    this._userService.selectedUser = selectedUser;
    this._router.navigateByUrl('candidates/details')
  }

}
