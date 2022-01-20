import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../product.service';
import { User } from './../product.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: User = {
    id: undefined,
    nome: '',
    email: '',
    telefone: '',
    idade: undefined,
    sexo: ''
  }

  constructor(
    private userService: UserService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.userService.readById(id).subscribe(users => {
      this.user = users;
    })
  }

  deleteUser(): void {
    this.userService.delete(this.user).subscribe(() => {
      this.userService.showMessage('Usuário Deletado com sucesso');
      this.router.navigate(['/products']);
    })
  }

  cancelDeleteuser(): void {
    this.router.navigate(['/products']);
  }

}
