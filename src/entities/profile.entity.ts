import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profiles' })
export class ProfileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_id: string;

    @Column()
    official_avatar: string;

    @Column()
    avatar: string;

    @Column()
    gender: boolean;

    @Column()
    nickname: boolean;

    @Column()
    birth_day: string;

    @Column()
    skype: string;

    @Column()
    facebook: string;
}
