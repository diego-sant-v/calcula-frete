import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  [x: string]: any;
  cliente: Cliente = {
    name: '',
    cep: '',
    cidade: '',
    logradouro: '',
    uf: '',
    valor: '',

  }


  HttpClient: any;
  HttpClientModule: any;

  constructor(private ClienteService: ClienteService,
    private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }

  createCliente(): void {
    //atribui os valor dos campos as suas respectivas variaveis  
    var nome = (<HTMLInputElement>document.getElementById('name')).value
    var cep = (<HTMLInputElement>document.getElementById('cep')).value
    //verificando se os campos estão vazios
    if (nome && cep == '' || nome === '' || cep === '') {
      this.ClienteService.showMessage('Digite um nome e um cep')
    } else {
      //passando o cliente 
      // o método subscribe me notifica quando a resposta chegar
      this.ClienteService.create(this.cliente).subscribe(() => {
        this.ClienteService.showMessage('Cliente criado com Sucesso')
        this.router.navigate(['/clientes'])
      })
    }

  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

  onKeyUp(evento: Event) {

    console.log((<HTMLInputElement>evento.target).value)
    var cep = ((<HTMLInputElement>evento.target).value)

    //resgatei o valor do campo cep
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe((dados: any) => this.populaForm(dados, form));

      }


    } else {
      this.ClienteService.showMessage('cep inválido')
    }

    console.log(cep)

  }


  populaForm(dados: { cep: any; logradouro: any; bairro: any; localidade: any; uf: any; }, form: any) {

    var logradouro = dados.logradouro

    var a = [({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf

    })]
    this.cliente.logradouro = dados.logradouro;
    this.cliente.bairro = dados.bairro;
    this.cliente.cidade = dados.localidade;
    this.cliente.uf = dados.uf;
    var valor = this.cliente.valor
    var localidade = this.cliente.cidade
    var uf = this.cliente.uf
    var muda
    console.log(a)

    var sim = (<HTMLInputElement>document.getElementById('calcula_valor-sim')).checked
    if (sim === true) {
      muda = 10
    }
    if (muda === 10) {
      //a quantidade "excessiva" de cases se deve ao caso que a linguagem não permite (de acordo com minhas pesquisas e tentativas) atribuir operadores lógicos em switch
      // oque de fato reduziria a quantidade de linhas, porém é uma limitação da linguagem
      // em if's encadeados ficaria quase a mesma coisa, dessa forma decidi manter em case's
      switch (localidade) {
        case "Atibaia":
        case "São Roque":
        case "Itu":
        case "Boituva":
        case "Holambra":
        case "Socorro":
        case "Campos do Jordão":
        case "São Pedro":
        case "Cunha":
        case "Brotas":
        case "Ribeirão Preto":
        case "Olímpia":
        case "Uberlândia":
        case "Juiz de Fora":
        case "Montes Claros":
        case "Uberaba":
        case "Governador Valadares":
        case "Ipatinga":
        case "Sete Lagoas":
        case "Divinópolis":
        case "Poços de Caldas":
        case "Patos de Minas":
        case "Campos dos Goytacazes":
        case "Petrópolis":
        case "Volta Redonda":
        case "Macaé":
        case "Cabo Frio":
        case "Angra dos Reis":
        case "Nova Friburgo":
        case "Barra Mansa":
        case "Teresópolis":
        case "Rio das Ostras":
        case "Serra":
        case "Vila Velha":
        case "Cariacica":
        case "Cachoeiro de Itapemirim":
        case "Linhares":
        case "São Mateus":
        case "Guarapari":
        case "Colatina":
        case "Aracruz":
          //cidades do interior da regiao sudeste 80
          this.cliente.valor = '80'
          break;


        case "Porto Alegre":
        case "Florianópolis":
        case "Curitiba":
        case "São Luís":
        case "Teresina":
        case "Fortaleza":
        case "Natal":
        case "João Pessoa":
        case "Recife":
        case "Maceió":
        case "Aracaju":
        case "Salvador":
          //capitais da regiao sul e nordeste é 70
          this.cliente.valor = '70'
          break;


        case "Gramado":
        case "Canela":
        case "Porto Alegre":
        case "Bento Gonçalves":
        case "Torres":
        case "Três Coroas":
        case "Cambará do sul":
        case "São Miguel das Missões":
        case "Antônio Prado":
        case "Caxias do sul":
        case "Feira de Santana":
        case "Campina Grande":
        case "Caruaru":
        case "Petrolina":
        case "Vitória da Conquista":
        case "Mossoró":
        case "Juazeiro do Norte":
        case "Imperatriz":
        case "Arapiraca":
        case "Juazeiro":
        case "Campo Grande":
        case "Cuiabá":
        case "Goiânia":
        case "Palmas":
        case "Belém":
        case "Macapá":
        case "Porto Velho":
        case "Manaus":
        case "Boa Vista":
        case "Rio Branco":
          //Cidades do interior das regiões sul, nordeste, centro oeste e norte
          //como as 4 terao o mesmo valor eu colocarei em um unico case
          this.cliente.valor = '100'
          break;

        case "São Paulo":
          // para sp capital é grátis
          this.cliente.valor = '0'
          break;

        case "Belo Horizonte":
          // capitais da regiao sudeste é 50
          this.cliente.valor = '50'
          break;
        // capitais da regiao sudeste é 50
        case "Vitória":
          this.cliente.valor = '50'
          break;
        // capitais da regiao sudeste é 50
        case "Rio de Janeiro":
          this.cliente.valor = '50'
          break;


      }
      //demais localidades
      switch (uf) {
        case "AL":
        case "SE":
          this.cliente.valor = '150'
      }
    }





  }



}

function form(dados: any, form: any): void {
  throw new Error('Function not implemented.');
}

function x(x: any) {
  throw new Error('Function not implemented.');
}

