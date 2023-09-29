import { LogLevels, Formatter, ILogMessage } from "./types"

const formatter: Formatter = (logMessage: ILogMessage) => {
  const { message, logDate, logLevel } = logMessage
  return `[${logDate.toISOString()}] [${logLevel}] ${message}` 
}

const makeLevelLogger = (frmt: Formatter, logLevel: LogLevels) => (message: string, logDate: Date) => { console.log(frmt({ message, logLevel, logDate })) }

const getLogger = (formatter: Formatter) => ({
  info(message: string, logDate: Date) { console.log(formatter({ message, logDate, logLevel: 'INFO' })) },
  error(message: string, logDate: Date) { console.log(formatter({ message, logDate, logLevel: 'ERROR' })) }
})

const logInfo = makeLevelLogger(formatter, 'INFO')
const logError = makeLevelLogger(formatter, 'ERROR')

logInfo('logInfo: deu bom', new Date())
logError('logError: deu ruim', new Date())

const logger = getLogger(formatter)

logger.info('logger.info: Tbm Deu Bom', new Date())
logger.error('logger.error: Tbm Deu ruim', new Date())
