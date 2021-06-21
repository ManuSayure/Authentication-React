export interface ISolicitation{
    id: number,
    clientId: number,
    installmentInterest: number,
    installmentInterestValue: number,
    comission: number,
    comissionValue: number,
    installmentValue: number,
    cardNumber: string,
    desiredValue: number,
    totalLoan: number,
    installmentId: number,
    rateTableId: number
}