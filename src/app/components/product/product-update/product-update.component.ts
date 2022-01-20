import { User } from './../product.module';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage('Usuário Atualizado com sucesso');
      this.router.navigate(['/products']);
    })
  }

  cancelUpdateUser(): void {
    this.router.navigate(['/products']);
  }

}
