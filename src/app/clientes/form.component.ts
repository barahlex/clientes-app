import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './Cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente : Cliente = new Cliente();
  public titulo : string = "Crear Cleinte";

  constructor(private clienteService:ClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  public create():void{
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    )
  }

}
