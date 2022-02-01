import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user-interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {


  user: User = {
    nome: '',
    email: '',
    telefone: '',
    idade: undefined,
    gen: '',
  }

  constructor(private userService: UserService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  async createUser(): Promise<any> {
    
    try {
      const dataCreated = await this.userService.create(this.user);
      const response: any = await lastValueFrom(dataCreated);

      this.userService.showMessage(response.message);
      this.router.navigate(['/user'])
    } catch (error: any) {
      this.userService.showMessage(error.error.message);
    }
  }

  cancelCreateUser(): void {
    this.userService.showMessage('Operação cancelada.');
    this.router.navigate(['/user'])
  }

}
