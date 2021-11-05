import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dato: any;//variable tipo ANY->recibe cualquier cosa
  constructor(private activeRouter: ActivatedRoute, private router: Router, private menu: MenuController) {
    //llamar a la ruta activa y obtengo sus parámetros(si es que tiene)
    this.activeRouter.queryParams.subscribe(params=>{//utilizo lambda
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });
  }

  qr(){
    this.menu.close();
  }

  openFirst() {
    console.log('hola');
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
