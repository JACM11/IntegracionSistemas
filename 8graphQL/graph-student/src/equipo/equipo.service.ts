import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEquipoInput, UpdateEquipoInput } from './dto/inputs';
import { Equipo } from './entities/equipo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EquipoService {

  constructor( 
    @InjectRepository(Equipo)
    private readonly equipoRepository:Repository<Equipo> ){}

  async create(createEquipoInput: CreateEquipoInput): Promise<Equipo>  {
    const newEquipo= this.equipoRepository.create(createEquipoInput);
    return await this.equipoRepository.save(newEquipo); 
  }

  async findAll(): Promise<Equipo[]> {
    return this.equipoRepository.find();
  }

  async findOne(id: string): Promise<Equipo> {
     const equipo= await  this.equipoRepository.findOneBy({id});
     if (!equipo) throw new NotFoundException(`Not found`)
     return equipo;
  }

  async update(id: string, updateEquipoInput: UpdateEquipoInput): Promise<Equipo> {
    
    const equipo = await this.equipoRepository.preload(updateEquipoInput);
    if (!equipo) throw new NotFoundException(`Not found`)
    return this.equipoRepository.save(equipo);

  }

  async remove(id: string): Promise<Equipo> {

    const estudiante= await  this.findOne(id);

    await this.equipoRepository.remove(estudiante);

    return {...estudiante, id};

  }
}
