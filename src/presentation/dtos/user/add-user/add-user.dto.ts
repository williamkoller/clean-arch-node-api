import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class AddUserDTO {
  @IsNotEmpty()
  @IsString()
  @Length(4, 25)
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 25)
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too Weak',
  })
  readonly password: string;
}
