import { Transform } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateVentaDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  funcionId: number;

  @IsArray()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @IsNotEmpty()
  asientosIds: number[];

  @ValidateIf((o) => !o.usuarioId)
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim())
  @IsNotEmpty()
  nombreUsuario: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  usuarioId?: number;
}
