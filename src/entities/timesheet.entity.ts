import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'timesheets' })
export class TimesheetEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_id: string;

    @Column({ nullable: true })
    start_day: string;

    @Column({ nullable: true })
    end_day: string;

    @Column({ nullable: true })
    work_date: string;

    @Column({ nullable: true })
    check_in: string;

    @Column({ nullable: true })
    check_out: string;

    @Column()
    reason: string;

    @Column({ nullable: true })
    request_for_date: string;

    @Column({ nullable: true })
    date_cover_up: string;

    @Column({ nullable: true })
    overtime: string;

    @Column({ nullable: true })
    leave_all_day: string;

    @Column({ nullable: true })
    leave_start: string;

    @Column({ nullable: true })
    leave_end: string;

    @Column({ nullable: true })
    time_count: string;

    @Column({ nullable: true })
    request_type: string;

    @Column({ nullable: true })
    request_ot: string;

    @Column({ nullable: true })
    actual_overtime: string;

    @Column({ nullable: true })
    status: string;
}
