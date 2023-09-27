import { LogLevels, Formatter } from "./types"

const formatter: Formatter = (message: string, logLevel: LogLevels) => `[${new Date().toISOString()}] [${logLevel}] ${message}`

const logInfo = (message: string) => { console.log(formatter(message, 'INFO')) }
const logError = (message: string) => { console.error(formatter(message, 'ERROR')) }

const getLogger = (formatter: Formatter) => ({
  info(message: string) { console.log(formatter(message, 'INFO')) },
  error(message: string) { console.log(formatter(message, 'ERROR')) }
})


logInfo('logInfo: deu bom')
logError('logError: deu ruim')

const logger = getLogger(formatter)

logger.info('logger.info: Tbm Deu Bom')
logger.error('logger.error: Tbm Deu ruim')