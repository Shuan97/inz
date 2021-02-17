import { IsNotEmpty } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  readonly name: string;
}
