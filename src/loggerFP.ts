import { LogLevels, Formatter } from "./types"

const formatter: Formatter = (message: string, logLevel: LogLevels) => `[${new Date().toISOString()}] [${logLevel}] ${message}`

const makeLevelLogger = (frmt: Formatter, logLevel: LogLevels) => (message: string) => { console.log(frmt(message, logLevel)) }

const getLogger = (formatter: Formatter) => ({
  info(message: string) { console.log(formatter(message, 'INFO')) },
  error(message: string) { console.log(formatter(message, 'ERROR')) }
})

const logInfo = makeLevelLogger(formatter, 'INFO')
const logError = makeLevelLogger(formatter, 'ERROR')

logInfo('logInfo: deu bom')
logError('logError: deu ruim')

const logger = getLogger(formatter)

logger.info('logger.info: Tbm Deu Bom')
logger.error('logger.error: Tbm Deu ruim')
