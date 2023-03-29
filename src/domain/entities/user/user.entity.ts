import { randomUUID } from 'crypto';

export type UserProps = {
  name: string;
  email: string;
  password: string;
};

export class User {
  public readonly id: string;
  public props: Required<UserProps>;
  constructor(props: UserProps, id?: string) {
    this.id = id || randomUUID();

    this.props = {
      ...props,
    };
  }

  static create(props: UserProps, id?: string): User {
    return new User(props, id);
  }

  updateName(name: string) {
    this.name = name;
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  updateEmail(email: string) {
    this.email = email;
  }

  get email() {
    return this.props.email.toLowerCase();
  }

  private set email(value: string) {
    this.props.email = value;
  }

  updatePassword(password: string) {
    this.password = password;
  }

  get password() {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
