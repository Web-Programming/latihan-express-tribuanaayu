import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formError: String = "";
loginForm: FormGroup;

//Inject class Router dan service authentication  

constructor(private fb: FormBuilder){
  this.loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}

get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

public onLoginSubmit(): void{
  if (this.loginForm.valid) {
    const formData = this.loginForm.value;
    console.log('Form submitted', formData);
    //Panggil method loginAuth()
    
  }else{
      this.formError = 'All fields are required, please try again';
  }
}
}
