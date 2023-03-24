export interface BaseRepositoryInterface<T> {
  create(data: T): Promise<T>;
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  update(id: string, dataUpdate: T): Promise<T>;
  remove(id: string): Promise<void>;
}
