import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { Car } from "../../cars/entities/Car";

@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;
  @Column()
  cpf: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  avatar?: string;
  @Column()
  bio?: string;
  @Column()
  password: string;
  @Column()
  isAdmin: boolean;
  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Car, car => car.id)
  cars: Car[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }