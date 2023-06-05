import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Equipo } from '../equipo/entities/equipo.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipoService } from 'src/equipo/equipo.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       equipo: Equipo
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Equipo)
     private readonly equipoRepository: Repository<Equipo>,
     private readonly equipoService: EquipoService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.equipoService.prueba());
        const equipo =await  this.equipoRepository.findOneBy({ descripcion: name });
        if (!equipo) throw new Error('Estudiante no encontrado');
        if (!equipo.serie) throw new Error('A');

        
        this.connectedClients[client.id]= {socket:client, equipo: equipo};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getEquipoDescripcion(id:string){
        return this.connectedClients[id].equipo.descripcion;
    }
}
