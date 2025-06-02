import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateFuncionDto {
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim())
  @IsNotEmpty()
  nombre: string;

  @IsBoolean()
  @IsNotEmpty()
  segundoDia: boolean;

  @IsInt()
  @IsPositive()
  @IsOptional()
  descuento?: number;
}
