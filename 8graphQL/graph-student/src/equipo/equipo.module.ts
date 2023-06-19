import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoResolver } from './equipo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipo } from './entities/equipo.entity';

@Module({
  providers: [EquipoResolver, EquipoService],
  imports:[
    TypeOrmModule.forFeature([Equipo])
  ]
})
export class EquipoModule {}
