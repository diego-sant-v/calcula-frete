import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {
/*no construtor do componente eu itei solicitar um router, 
do tipo router
é importante ter o tipo pois soment o atributo não será identificado*/
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  /*função para navegar ate o cliente create
  essa função será chamada no evento click do botão*/

  navigateToClienteCreate(): void {
    //abaixo eu passei a rota para o naigate
    this.router.navigate(['/clientes/create'])
  }

}
