import { User } from '../user-interface'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

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
    this.reqFromParams();
  }

  async updateUser(): Promise<void> {
    try {
      const dataUpdated = await this.userService.update(this.user);
      const response: any = await lastValueFrom(dataUpdated);

      this.userService.showMessage(response.message);
      this.router.navigate(['/user'])
    } catch (error: any) {
      this.userService.showMessage(error.error.message);
    }
  }

  cancelUpdateUser(): void {
    this.router.navigate(['/user']);
  }

  async reqFromParams() {

    try {
      const id = this.route.snapshot.params['id'];
      const dataReadById = await this.userService.readById(id);
      const response: any = await lastValueFrom(dataReadById);
      
      this.user = response;

    } catch (error: any) {
      this.userService.showMessage(error.error.message);
    }
    
  }

}
