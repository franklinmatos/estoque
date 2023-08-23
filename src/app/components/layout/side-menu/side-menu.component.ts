import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input()
  set opneSlide(value: boolean){
      this.isHandset = value;
  }
  isHandset: boolean = false

  constructor() {}

  ngOnInit(): void {}

  getIsHandSet():boolean{
    return this.isHandset;
  }

}
