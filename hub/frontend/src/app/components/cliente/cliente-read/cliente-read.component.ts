import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './../cliente.model';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes!: Cliente[]
  displayedColumns = ['id', 'name', 'cep', 'uf', 'cidade', 'logradouro', 'bairro', 'action', 'valor']
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes)
    })
  }

  

}
