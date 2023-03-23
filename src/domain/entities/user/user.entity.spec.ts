import { User, UserProps } from './user.entity';

describe('UserEntity', () => {
  describe('create()', () => {
    it('should be constructor()', () => {
      let userProps: UserProps = {
        name: 'any_name',
        email: 'email@mail.com',
        password: '',
      };
      let user = User.create(userProps);
      expect(user.props).toStrictEqual({
        ...userProps,
      });
    });
  });
});
