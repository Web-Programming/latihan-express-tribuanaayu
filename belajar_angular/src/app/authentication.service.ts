import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = "https://localhost:3000"; 

  constructor() { }

  async submitRegister(registerdata : FormGroup) : Promise<Auth>{
    const data = await fetch(`${this.url}/users/register`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({... registerdata.value})
    });
    return await data.json() ?? {};
}
}
