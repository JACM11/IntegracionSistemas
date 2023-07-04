import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoSchema } from './schema/equipo.schema';
import { EQUIPO } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipoController } from './equipo.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: EQUIPO.name,
        useFactory: () => EquipoSchema,
      },
    ]),
  ],
  controllers: [EquipoController],
  providers: [EquipoService],
})
export class EquipoModule {}
