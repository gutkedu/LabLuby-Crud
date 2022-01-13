interface ICreateUserDTO {
  cpf: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  password: string;
  id?: string;
}

export { ICreateUserDTO }
