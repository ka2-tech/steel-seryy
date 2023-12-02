import { AccountEntity } from '../entities/account.entity';

export type UserType = Omit<AccountEntity, 'hashPassword'>;
