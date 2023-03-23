import { randomUUID } from 'crypto';

export type UserProps = {
  name: string;
  email: string;
  password: string;
};

export class User {
  private readonly id: string;
  public props: Required<UserProps>;
  constructor(props: UserProps, id?: string) {
    this.id = id || randomUUID();

    if (!props) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this.props = {};
      return;
    }

    this.props = {
      ...props,
    };
  }

  static create(props: UserProps, id?: string): User {
    return new User(props, id);
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get email() {
    return this.props.email;
  }

  private set email(value: string) {
    this.props.email = value;
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
