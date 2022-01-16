import { v4 as uuidV4 } from "uuid"
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  ManyToOne,
} from "typeorm"
import { User } from "../../account/entities/User";

@Entity("cars")
class Car {
  @PrimaryColumn()
  id?: string;
  @Column()
  brand: string;
  @Column()
  model: string;
  @Column()
  year: number;
  @Column()
  km: number;
  @Column()
  chassis: string;
  @Column()
  color: string;
  @Column()
  price: number;
  @Column()
  status: string;
  @CreateDateColumn()
  updated_at: Date;
  @CreateDateColumn()
  created_at: Date;

  //@ManyToOne(() => User, user => user.id)
  //user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Car }

