import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    cpf,
    name,
    email,
    avatar,
    bio,
    password,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      cpf,
      name,
      email,
      avatar,
      bio,
      password,
      id,
    });
    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async removeById(id: string): Promise<void> {
    const user = await this.repository.findOne(id);
    await this.repository.remove(user);
  }

  async findByCpf(cpf: string): Promise<User> {
    const user = await this.repository.findOne({ cpf });
    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

}


export { UsersRepository }