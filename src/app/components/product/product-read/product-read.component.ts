import { UserService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../product.module';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  users: any;
  displayedColumns = ['id', 'nome', 'email', 'telefone', 'sexo', 'idade', 'action']

  constructor(private productService: UserService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(user => {
      this.users = user
      console.log(user)
    })
  }

}
