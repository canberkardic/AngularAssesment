import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/IUser';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {

  constructor(
    private _userService : UserService
  ) { }

  user : IUser;

  ngOnInit(): void {
    this.user = this._userService.selectedUser;
  }
  

}
