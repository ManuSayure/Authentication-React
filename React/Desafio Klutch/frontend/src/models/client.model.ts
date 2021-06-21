export interface IClient {
    id: number,
    name: string,
    phone: string,
    cpf: string,
    bank: {
      label: string,
      accountTypeLabel: string,
      accountNumber: string,
    }
  }