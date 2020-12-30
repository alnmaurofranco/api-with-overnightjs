import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('web-version')
export default class Version {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'version', type: 'varchar', default: '1.0.0' })
  version: string;

  @CreateDateColumn({ type: 'time with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'time with time zone' })
  updated_at: Date;
}
