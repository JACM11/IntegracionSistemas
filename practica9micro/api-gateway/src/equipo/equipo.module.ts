import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { EquipoController } from './equipo.controller';

@Module({
  imports: [ProxyModule],
  controllers: [EquipoController],
})
export class EquipoModule {}
