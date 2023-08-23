; import { Injectable } from '@angular/core';
import { Cliente } from '../entity/cliente.entity';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  listaCliente: Cliente[] = [
      { id: 1, nome: 'Cliente 01', email: 'cliente01@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222'  }
    , { id: 2, nome: 'Cliente 02', email: 'cliente02@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222'  }
    , { id: 3, nome: 'Cliente 03', email: 'cliente03@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222'  }
    , { id: 4, nome: 'Cliente 04', email: 'cliente04@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222'  }
    , { id: 5, nome: 'Cliente 05', email: 'cliente05@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222'  }
    , { id: 6, nome: 'Cliente 06', email: 'cliente06@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222'  }
    , { id: 7, nome: 'Cliente 07', email: 'cliente07@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222'  }
    , { id: 8, nome: 'Cliente 08', email: 'cliente08@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222'  }
    , { id: 9, nome: 'Cliente 09', email: 'cliente09@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222'  }
    , { id: 10, nome: 'Cliente 10', email: 'cliente10@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222' }
    , { id: 11, nome: 'Cliente 11', email: 'cliente11@gmail.com', celular: '71988887777', cidade: 'Salvador', cpfCnpj:'22222222222' }

  ]

  constructor() { }

  findAll(): Cliente[] {
    return this.listaCliente
  }

  findById(id: number): Cliente | undefined {
    return  this.listaCliente.find(cliente => cliente.id === id);
  }

  save(cli: Cliente): Cliente | undefined {
     this.listaCliente.push(cli);
     return this.findById(cli.id)
  }

  delete(cli: Cliente): boolean {
    const index = this.listaCliente.findIndex(cliente => cliente.id === cli.id);

    if (index !== -1) {
        this.listaCliente.splice(index, 1);
        return true;
    } else {
        return false;
    }
  }

  update(cli: Cliente): Cliente | undefined{
     let clienteFind = this.listaCliente.filter(cliente => {
      if(cliente.id === cli.id){
        cliente.nome = cli.nome
        cliente.celular = cli.celular
        cliente.email = cli.email
        cliente.cidade = cli.cidade
      }
    });
    return clienteFind[0]
 }

}
