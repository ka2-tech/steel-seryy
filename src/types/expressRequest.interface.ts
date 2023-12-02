import { Request } from 'express';
import { AccountEntity } from '../entities';

export interface ExpressRequest extends Request {
    user?: AccountEntity;
}
