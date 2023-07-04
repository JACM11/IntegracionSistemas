import { EquipoDTO } from './dto/equipo.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EQUIPO } from 'src/common/models/models';
import { IEquipo } from 'src/common/interfaces/equipo.interface';

@Injectable()
export class EquipoService {
  constructor(@InjectModel(EQUIPO.name) private readonly model: Model<IEquipo>) {}

  
  async create(equipoDTO: EquipoDTO): Promise<IEquipo> {
    const newEquipo = new this.model(equipoDTO);
    return await newEquipo.save();
  }

  async findAll(): Promise<IEquipo[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IEquipo> {
    return await this.model.findById(id);
  }

  async update(id: string, equipoDTO: EquipoDTO): Promise<IEquipo> {
    return await this.model.findByIdAndUpdate(id, equipoDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
