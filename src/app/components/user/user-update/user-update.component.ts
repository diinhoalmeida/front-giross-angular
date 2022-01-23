import { User } from '../user-interface'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = {
    id: undefined,
    nome: '',
    email: '',
    telefone: '',
    idade: undefined,
    gen: ''
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
      this.router.navigate(['/user']);
    })
  }

  cancelUpdateUser(): void {
    this.router.navigate(['/user']);
  }

}
