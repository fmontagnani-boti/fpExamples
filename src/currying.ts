interface IEmployee {
  firstName: string
  lastName: string
}

const employess: IEmployee[] = [
  { firstName: 'Fabricio', lastName: 'Chuchu' },
  { firstName: 'Andrey', lastName: 'Chuchu' },
  { firstName: 'Edson', lastName: 'Chuchu' },
]

const buildEmployeeLogMessage = (message: string) => (employee: IEmployee) => {
  return `${message} ${employee.firstName} ${employee.lastName}`
}

const welcomeMessage = buildEmployeeLogMessage('Welcome ')
const goodByeMessage = buildEmployeeLogMessage('Goodbye ')

const welcomeMsgs = employess.map(welcomeMessage)
const goodByeMsgs = employess.map(goodByeMessage)

console.log(welcomeMsgs)
console.log(goodByeMsgs)
