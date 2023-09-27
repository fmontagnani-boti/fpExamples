import { LogLevels } from "./types"

class Formatter {
  formatMessage(message: string, logLevel: LogLevels) {
    return `[${new Date().toISOString()}] [${logLevel}] ${message}`
  }
}

class Logger {
  formatter: Formatter

  constructor(formatter: Formatter) {
    this.formatter = formatter
  }

  log(message: string) {
    console.log(this.formatter.formatMessage(message, 'INFO'))
  }

  error(message: string) {
    console.error(this.formatter.formatMessage(message, 'ERROR'))
  }
}

const formatter = new Formatter()

const logger = new Logger(formatter)

logger.log(`Sucesso`)

logger.error(`Error`)