import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateEquipoInput {



  @Field(()=>String )
  @IsNotEmpty()
  descripcion:string;

  @Field(()=>String )
  @IsNotEmpty()
  serie:string;
  
}
