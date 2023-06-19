import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { EquipoService } from './equipo.service';
import { Equipo } from './entities/equipo.entity';
import { UpdateEquipoInput, CreateEquipoInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Equipo)
export class EquipoResolver {
  constructor(private readonly equipoService: EquipoService) {}

  @Mutation(() => Equipo)
  async createEquipo(@Args('createEquipoInput') createEquipoInput: CreateEquipoInput)
  :Promise<Equipo> {
    return this.equipoService.create(createEquipoInput);
  }

  @Query(() => [Equipo], { name: 'equipos' })
  async findAll():Promise<Equipo[]> {
    return this.equipoService.findAll();
  }

  @Query(() => Equipo, { name: 'equipo' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Equipo> {
    return this.equipoService.findOne(id);
  }

  @Mutation(() => Equipo)
  updateEquipo(@Args('updateEquipoInput') updateEquipoInput: UpdateEquipoInput): Promise<Equipo> {
    return this.equipoService.update(updateEquipoInput.id, updateEquipoInput);
  }

  @Mutation(() => Equipo)
  removeEquipo(@Args('id', { type: () => ID }) id: string): Promise<Equipo> {
    return this.equipoService.remove(id);
  }
}
