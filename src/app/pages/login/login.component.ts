import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  formLogin!: FormGroup;
  showPassword: boolean = false; //ver contraseña ícono
  constructor(public form: FormBuilder, private sessionService: LoginService,
    private alertController: AlertController, private route: Router) {
    this.formLogin = this.form.group({
      correo: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),

    });
   }

  ngOnInit() {}

  //botón acceder
  signUser(){
    let bodyLogin: LoginRequest = {
      email: this.formLogin.get('correo')?.value,
      contrasena: this.formLogin.get('password')?.value
    }
    this.sessionService.logInUser(bodyLogin)
          .subscribe({
            next: (dataAuthorized) => {
              console.log(dataAuthorized);
              this.route.navigate(['/home']);

            },
            error: (errorData) => {
              console.log(errorData);
              this.presentAlert(errorData.error.mensaje);
            },
            complete: () => {

            },
          });

  }

  //alertas de error:
  async presentAlert(message:string) {
    const alert = await this.alertController.create({
      header: 'Error al Iniciar Sesión',
      message: message,
      buttons: ['Aceptar'],
      backdropDismiss: false
    });

    await alert.present();
  }
}
