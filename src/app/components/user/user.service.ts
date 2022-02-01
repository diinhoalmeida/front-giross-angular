import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from './user-interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:4000/users"
  timeOut = 1000;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: Array<string>): void {
    if ( msg instanceof Array) {
      this.snackBar.open(msg.join("\n"), 'X', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        })  
    } else {
      this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          })     
    }
  } 

  create(user: User): any {
    return this.http.post<User>(this.baseUrl, user)
  } 

  read(): any{
    return this.http.get<User>(this.baseUrl)
  }

  readById(id: string): any {
    const url = `${this.baseUrl}/${id}`
    console.log(this.http.get<User>(url))
    return this.http.get<User>(url)
  }

  update(user: User): any {
    console.log(user);
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  delete(user: User): any {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }
}
