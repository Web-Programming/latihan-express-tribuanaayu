import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },

    {
    path:'register',
    component: RegisterComponent,
    title: 'Register Page'
    },
    
    {
        path:'login',
        component: LoginComponent,
        title: 'Login Page'
    }

];

