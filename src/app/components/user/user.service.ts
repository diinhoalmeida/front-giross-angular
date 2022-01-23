import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:4000/users"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  } 

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user)
  } 

  read(): Observable<User>{
    return this.http.get<User>(this.baseUrl)
  }

  readById(id: string): Observable<User>{
    const url = `${this.baseUrl}/${id}`
    console.log(this.http.get<User>(url))
    return this.http.get<User>(url)
  }

  update(user: User): Observable<User> {
    console.log(user);
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  delete(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }
}
