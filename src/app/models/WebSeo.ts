import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('web-seo')
export default class WebSeo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'desc', type: 'varchar' })
  desc: string;

  @Column({ name: 'footer', type: 'varchar' })
  footer: string;

  @Column({ name: 'url', type: 'varchar' })
  url: string;

  @CreateDateColumn({ type: 'time with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'time with time zone' })
  updated_at: Date;
}
