import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  constructor(
    private _userService : UserService,
    private _router : Router
  ) { }

  users = [];
  columnsToDisplay = ['name', 'username', 'edit'];


  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((data) => {
      this.users = data;
    }, (err) => alert(err))
  }

  onDetailPressed(selectedUser){
    this._userService.selectedUser = selectedUser;
    this._router.navigateByUrl('candidates/details')
  }

}
