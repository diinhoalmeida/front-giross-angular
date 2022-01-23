import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.module';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: any;
  displayedColumns = ['id', 'nome', 'email', 'telefone', 'sexo', 'idade', 'action']

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.read().subscribe(user => {
      this.users = user
      console.log(user)
    })
  }

}
