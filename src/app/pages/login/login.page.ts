import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  spinner: boolean = false;
  anio = new Date().getFullYear();

  constructor(
    private authSvc: AuthService,  
    private toastController: ToastController,
    private router: Router  
  ) { }

  ngOnInit() {
    if(this.authSvc.isLogged())
      this.router.navigate(['/dashboard']);

  }

  async onLogin() {
    try {
      this.spinner = !this.spinner; 
      const cred = await this.authSvc.login(this.email, this.password);
      localStorage.setItem('user_cred_token', JSON.stringify(cred));
      this.router.navigate(['/dashboard']);
    } catch (err) {
      console.log(err);
      let errMsj = '';
      
      switch(err.code) {
        case 'auth/wrong-password':
          errMsj = 'La contraseña ingresada es incorrecta';
        break;

        case 'auth/invalid-email':
          errMsj = 'El email ingresa no es correcto';
        break;

        case 'auth/user-not-found':
          errMsj = 'No se ha podido encontrar el usuario';
        break;

        case 'auth/argument-error':
          errMsj = 'La contraseña o el email no son validos';
        break;

        default:
          errMsj = 'No se pudo iniciar sesión, Intentelo de nuevo';
        break;
      }
      this.displayErrorToast(errMsj);
    } finally {
      this.spinner = !this.spinner;
    }
  } 

  async displayErrorToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: 'bottom',
      animated: true  
    });
    toast.present();
  }
}
