import { Hasher } from '@app/data/protocols/cryptography/hasher';
import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';

@Injectable()
export class BcryptAdapter implements Hasher {
  salt = 12;
  async hash(plaintext: string): Promise<string> {
    return hashSync(plaintext, this.salt);
  }
}
