import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user-interface'
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

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
    this.readAllData();
  }

  async readAllData() {
    try {
      const dataReadById = await this.userService.read();
      const response: any = await lastValueFrom(dataReadById);
      
      this.users = response;

    } catch (error: any) {
      this.userService.showMessage(error.error.message);
    }
  }

}
