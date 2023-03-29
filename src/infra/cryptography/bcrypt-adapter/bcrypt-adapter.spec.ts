import { BcryptAdapter } from './bcrypt-adapter';

describe('BcryptAdapter', () => {
  it('should be hash()', () => {
    const bcryptAdapter = new BcryptAdapter();
    const hash = bcryptAdapter.hash('any_value');
    jest.spyOn(bcryptAdapter, 'hash').mockImplementation(() => hash);
    expect(bcryptAdapter.hash('any_value')).toEqual(hash);
  });
});
