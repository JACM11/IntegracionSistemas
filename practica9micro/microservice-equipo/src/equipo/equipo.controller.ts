import { EquipoService } from './equipo.service';
import { EquipoDTO } from './dto/equipo.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EquipoMsg } from 'src/common/constants';

@Controller()
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @MessagePattern(EquipoMsg.CREATE)
  create(@Payload() equipoDTO: EquipoDTO) {
    return this.equipoService.create(equipoDTO);
  }

  @MessagePattern(EquipoMsg.FIND_ALL)
  findAll() {
    return this.equipoService.findAll();
  }

  @MessagePattern(EquipoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.equipoService.findOne(id);
  }
  @MessagePattern(EquipoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.equipoService.update(payload.id, payload.equipoDTO);
  }

  @MessagePattern(EquipoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.equipoService.delete(id);
  }
}
