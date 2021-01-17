import Logger from "pino"

export default Logger({
  prettyPrint: {
    ignore: 'pid,hostname'
  }
})
