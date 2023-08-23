import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username : string ="";
    password : string ="";
    show: boolean= false;
    loader: boolean = false;

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    usernameFormControl = new FormControl('', [Validators.required]);
    passwordFormControl = new FormControl('', [Validators.required]);


    async submit(){
      console.log("user name is " + this.username)
      this.loader = true;
      await this.sleep(20000); // Espera por 2 segundos
      //this.clear();
    }

    clear(){
      this.username ="";
      this.password = "";
      this.show = true;
    }

    sleep(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

}
