import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { EquipoMSG } from '../common/constants';
import { Observable } from 'rxjs';
import { EquipoDTO } from './dto/equipo.dto'
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { IEquipo } from 'src/common/interfaces/equipo.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('equipo')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/equipo')
export class EquipoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyEquipo = this.clientProxy.clientProxyEquipo();

  @Post()
  create(@Body() equipoDTO: EquipoDTO): Observable<IEquipo> {
    return this._clientProxyEquipo.send(EquipoMSG.CREATE, equipoDTO);
  }

  @Get()
  findAll(): Observable<IEquipo[]> {
    return this._clientProxyEquipo.send(EquipoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IEquipo> {
    return this._clientProxyEquipo.send(EquipoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() equipoDTO: EquipoDTO): Observable<IEquipo> {
    return this._clientProxyEquipo.send(EquipoMSG.UPDATE, { id, equipoDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyEquipo.send(EquipoMSG.DELETE, id);
  }
}
