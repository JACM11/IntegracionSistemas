import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoDto } from './create-equipo.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEquipoDto extends PartialType(CreateEquipoDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
