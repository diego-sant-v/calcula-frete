import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {
  cliente!: Cliente;

  constructor(private ClienteService: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ClienteService.readById('id').subscribe(cliente => {
      this.cliente = cliente
    })
  }

  deleteCliente(): void {
    this.ClienteService.delete(`${this.cliente.id}`).subscribe(() => {
      this.ClienteService.showMessage('Cliente excluido com sucesso!')
      this.router.navigate(['/clientes'])
    })

  }

  cancel(): void {
    this.router.navigate(['/clientes'])

  }

}
