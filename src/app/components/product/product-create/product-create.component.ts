import { UserService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../product.module';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class UserCreateComponent implements OnInit {


  user: User = {
    nome: '',
    email: '',
    telefone: '',
    idade: undefined,
    sexo: ''
  }

  constructor(private userService: UserService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Operação executada com sucesso.');
      this.router.navigate(['/products'])
    });
  }

  cancelCreateUser(): void {
    this.userService.showMessage('Operação cancelada.');
    this.router.navigate(['/products'])
  }

}
