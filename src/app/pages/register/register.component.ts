import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegisterRequest } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  formRegister!: FormGroup;
  showPassword: boolean = false; //ver contraseña ícono
  constructor(public form: FormBuilder, private route: Router, private registerService: RegisterService,
    private alertController: AlertController,) {
    this.formRegister = this.form.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(13),
      ]),
      correo: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),

    });
   }

  ngOnInit() {}

  createUser(){
    let bodyLogin: RegisterRequest = {
      email: this.formRegister.get('correo')?.value,
      contrasena: this.formRegister.get('password')?.value,
      nombre: this.formRegister.get('name')?.value
    }
    this.registerService.logInUser(bodyLogin)
          .subscribe({
            next: (dataAuthorized) => {
              console.log(dataAuthorized);
              if(dataAuthorized.code ==200){
                this.presentAlertSuccess(dataAuthorized.message);
              }
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

  //registro exitoso
  async presentAlertSuccess(message:string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['Aceptar'],
      backdropDismiss: false
    });

    await alert.present();
  }

  logIn(){
    this.route.navigate(['/login']);
  }
}
