import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EquipoService {

  private readonly logger = new Logger('EquipoService');

  constructor( 
    @InjectRepository(Equipo) 
    private readonly equipoRepository: Repository<Equipo>,

    ){}

  
  async create(createEquipoDto: CreateEquipoDto) {
    try {
      const equipo =  this.equipoRepository.create(createEquipoDto);
      await this.equipoRepository.save(equipo);
      return equipo;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.equipoRepository.find({});
  }

  async findOne(id: string) {
    const equipo= await  this.equipoRepository.findOneBy ({ id });
    if (!equipo)
      throw new NotFoundException(`Equipo ${id} no encontrado`);
    return equipo;

  }

  async update(id: string, updateEquipoDto: UpdateEquipoDto) {
    const equipo = await this.equipoRepository.preload({
      id: id,
      ...updateEquipoDto
    });
    if (!equipo) throw new NotFoundException(`Equipo ${id} no encontrado`)

    try {
      await  this.equipoRepository.save(equipo)
      return equipo;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const equipo = await this.findOne(id);
    await this.equipoRepository.remove(equipo);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
