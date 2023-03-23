import { User, UserProps } from './user.entity';

describe('UserEntity', () => {
  it('should be constructor()', () => {
    let userProps: UserProps = {
      name: 'any_name',
      email: 'email@mail.com',
      password: 'any_password',
    };
    let user = User.create(userProps);
    expect(user.props).toStrictEqual({
      ...userProps,
    });
  });

  it('should be updateName method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      email: 'email@mail.com',
      password: 'any_password',
    };
    let user = User.create(userProps);
    user.updateName('any_is_name');
    expect(user.name).toBe('any_is_name');
  });

  it('should be updateEmail method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      email: 'email@mail.com',
      password: 'any_password',
    };
    let user = User.create(userProps);
    user.updateEmail('email_valid@mail.com');
    expect(user.email).toBe('email_valid@mail.com');
  });

  it('should be updatePassword method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      email: 'email@mail.com',
      password: 'any_password',
    };
    let user = User.create(userProps);
    user.updatePassword('any_is_password');
    expect(user.password).toBe('any_is_password');
  });

  it('should be toJSON()', () => {
    let userProps: UserProps = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let user = User.create(userProps);
    user.toJSON();
    expect(user.toJSON()).toStrictEqual({
      id: user.id,
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
  });
});
