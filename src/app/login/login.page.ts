import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dato:string;
  showSpinner = false;
  constructor(public toastController: ToastController, private router: Router) {}
  saludar(){
    //llmar el Toast
    //console.log(this.dato);
    this.presentToast('Hola '+this.dato);
  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }
  ingresar(){
    //declaro e instancio un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras={
      state:{dato: this.dato}// al state le asigno el parámetro que deseo enviar
    }
    
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.router.navigate(['/home'], navigationExtras);
    },2000)

    //Utilizo Api enrutador para llamar a la siguiente página
    
  }

  ngOnInit() {
  }

}
