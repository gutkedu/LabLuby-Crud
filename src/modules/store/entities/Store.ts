import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm"
import { User } from "../../account/entities/User";
import { Car } from "../../cars/entities/Car";

@Entity("store")
class Store {
  @PrimaryColumn()
  id?: string;
  @Column()
  price: number;
  @Column()
  car_status?: string;
  @Column()
  isOwned: boolean;
  @Column()
  isReserved: boolean;
  @Column()
  isSold: boolean;

  @CreateDateColumn()
  updated_at: Date;
  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Car)
  @JoinColumn()
  car: Car;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Store }
