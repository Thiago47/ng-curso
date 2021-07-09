import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
//Importando o serviço
import { OfertasService } from '../ofertas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //injetando o serviço no componente
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] = []

  //ofertasService é uma váriavel : OfertasService é o tipo dela
  constructor( private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.ofertasService.getOfertas()
    console.log(this.ofertas)
  }

}
