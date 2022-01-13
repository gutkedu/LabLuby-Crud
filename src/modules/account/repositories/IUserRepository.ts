import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { UpdateResult } from "typeorm";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  removeById(id: string): Promise<void>;
  findByCpf(cpf: string): Promise<User>;
  list(): Promise<User[]>;
  update(data: ICreateUserDTO): Promise<UpdateResult>;
}

export { IUsersRepository }

