import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class User {
  email: string = "";
  password: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string ) {
    return this.http.post<User>('/signin', {email, password});
  }
}
