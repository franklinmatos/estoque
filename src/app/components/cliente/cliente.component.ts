import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/entity/cliente.entity';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  listaClientes: Cliente[] = []
  displayedColumns: string[] = ['Nome', 'Cpf/Cnpj','Email', 'Celular', 'Cidade'];
  panelOpenState = false;
  dataSource = new MatTableDataSource<Cliente>;
  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.listaClientes = this.findAll();
    this.dataSource.data = this.listaClientes
  }

  findAll(): Cliente[]{
    return this.service.findAll();
  }

}
