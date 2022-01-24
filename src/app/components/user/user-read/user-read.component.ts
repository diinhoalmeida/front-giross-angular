import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user-interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: any;
  displayedColumns = ['id', 'nome', 'email', 'telefone', 'gen', 'idade', 'action']

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.read().subscribe((response:any) => {
      this.users = response
      console.log(response)
    })
  }

}
