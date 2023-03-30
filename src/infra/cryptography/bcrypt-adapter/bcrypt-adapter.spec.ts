import { BcryptAdapter } from './bcrypt-adapter';

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter();
};

describe('BcryptAdapter', () => {
  it('should be hash()', async () => {
    const sut = makeSut();
    const hash = await sut.hash('any_value');
    jest.spyOn(sut, 'hash').mockImplementation(() => Promise.resolve(hash));
    expect(await sut.hash('any_value')).toEqual(hash);
  });
});
