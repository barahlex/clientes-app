import { Component, OnInit } from '@angular/core';
import { Cliente } from './Cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente : Cliente = new Cliente();
  public titulo : string = "Crear Cleinte";
  constructor() { }

  ngOnInit(): void {
  }

  public create():void{
    console.log("Click");
    console.log(this.cliente);
  }

}
