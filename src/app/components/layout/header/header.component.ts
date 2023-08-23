import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lay-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  titulo: string = 'Fluxo de Caixa'
  isOpenSlide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getOpenSlide(): boolean{
    return this.isOpenSlide
  }

  openCloseSlide(){
    this.isOpenSlide = !this.isOpenSlide
  }
}
