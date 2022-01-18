import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm"
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { Store } from "../../store/entities/Store";

@Entity("users")
class User {
  @PrimaryColumn()
  @Index({ unique: true })
  id?: string;

  @Column()
  @IsString()
  @MaxLength(11)
  @MinLength(11)
  cpf: string;

  @Column()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  avatar?: string;

  @Column()
  @IsString()
  bio?: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  isAdmin: boolean;

  @OneToOne(() => Store, store => store.id)
  store: Store;

  @CreateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }