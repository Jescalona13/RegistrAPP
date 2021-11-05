import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  showSpinner = false;
  constructor(private router: Router) { }

  cargaRecuperar(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.router.navigate(['/login']);
    },2000)
  }

  ngOnInit() {
  }

}
