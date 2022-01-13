import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany } from "typeorm"
import { Store } from "../../store/entities/Store";

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
  price: number;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Car }

