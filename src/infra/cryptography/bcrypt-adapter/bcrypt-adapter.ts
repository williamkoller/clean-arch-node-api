import { Hasher } from '@app/data/protocols/cryptography/hasher';
import { hashSync } from 'bcrypt';

export class BcryptAdapter implements Hasher {
  salt = 12;
  async hash(plaintext: string): Promise<string> {
    return hashSync(plaintext, this.salt);
  }
}
