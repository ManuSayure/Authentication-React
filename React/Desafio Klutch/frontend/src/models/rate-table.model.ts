import {IInstallment} from './installments.model';
export interface IRateTable {
    id: number,
    name: string,
    installments: IInstallment[],
}