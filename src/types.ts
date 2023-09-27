export type LogLevels = 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL'
export type Formatter = (message: string, logLevel: LogLevels) => string