import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente.model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:3001/clientes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  //criando a requisição http
  //irei usar o observable para monitorar

  create(cliente: Cliente): Observable<Cliente> {
    //irei passar dentro do post a url declarada na baseUrl
    //o evento para disparar o código é quando a requisição retornar

    return this.http.post<Cliente>(this.baseUrl, cliente)
  }

  //método para a leitura
  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl)
  }
  //irei subscrever quando a resposta de cliente chegar (Observable)
  //peguei a url base e concatenei com o id abaixo
  readById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }

  delete(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }





}
