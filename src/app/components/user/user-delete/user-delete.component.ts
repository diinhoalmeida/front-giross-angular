import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user-interface'
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

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

  async deleteUser(): Promise<any> {
    try {
      const dataCreated = await this.userService.delete(this.user)
      const response: any = await lastValueFrom(dataCreated);

      this.userService.showMessage(response.message);
      this.router.navigate(['/user'])
    } catch (error: any) {
      this.userService.showMessage(error.error.message);
    }
  }

  cancelDeleteuser(): void {
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
