import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateFuncionDto {
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim())
  @IsNotEmpty()
  nombre: string;

  @IsBoolean()
  @IsNotEmpty()
  segundo_dia: boolean;
}
