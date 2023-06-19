import { IsUUID } from 'class-validator';
import { CreateEquipoInput } from './create-equipo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateEquipoInput extends PartialType(CreateEquipoInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
