export default (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return `${bytes}Bytes`

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const units: Array<string> = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB' ]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const totalSize = (parseFloat((bytes / Math.pow(k, i)).toFixed(dm)))
  const result = `${totalSize}${units[ i ]}`

  // eslint-disable-next-line consistent-return
  return result
}
