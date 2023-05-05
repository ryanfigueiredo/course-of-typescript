// tipos avancados e novos operadores
// operador de intersection &
// operador de Union |

interface BankDetails {
  account: number
  agency: number
  bank: string
}

interface Client {
  name: string
  email: string
}

interface PersonalData {
  cpf: number
}

type DataClient = BankDetails & Client & PersonalData // intersection

const dataClient: DataClient = {
  account: 123,
  agency: 44,
  bank: 'Itau-bank',
  cpf: 1101,
  email: 'data_client@data.com',
  name: 'Data client'
}

console.log(dataClient)