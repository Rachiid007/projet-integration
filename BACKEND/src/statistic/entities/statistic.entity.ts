import { profile } from 'console';
import { Users } from 'src/users/entities/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Statistic {
  @PrimaryGeneratedColumn('increment')
  id_stat: number;

  @Column()
  nombre_parties_flashcards: number;
  @Column()
  nombre_parties_drag: number;

  @OneToOne(() => Users, { cascade: true })
  @JoinColumn({ name: 'id' })
  user: Users;
}