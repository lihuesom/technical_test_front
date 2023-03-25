import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  //Definiendo el tipo de button
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color =  'primary';

  constructor() { }

  ngOnInit(): void {
  }

  // colores dinámicos
  get colors(){
    return {
      'bg-success-600':this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300':this.color === 'success',
      'bg-primary-600':this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300':this.color === 'primary',
      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
    };
  }

}