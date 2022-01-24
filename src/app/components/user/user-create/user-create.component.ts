import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user-interface';

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

  createUser(): void {
    this.userService.create(this.user).subscribe((result: any) => {
      if (result.errorMessage) {
        this.userService.showMessage(result.errorMessage); 
        return     
      }

      if (result.errorBlank) {
        this.userService.showMessage(result.errorBlank); 
        return
      }

      this.userService.showMessage(result.message);
      this.router.navigate(['/user'])
    });
  }

  cancelCreateUser(): void {
    this.userService.showMessage('Operação cancelada.');
    this.router.navigate(['/user'])
  }

}
