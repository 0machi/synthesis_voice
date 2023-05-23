export const getDate = (): string => {
  const date = new Date()
  date.setTime(date.getTime() + (9 * 60 * 60 * 1000))
  return date.toISOString().replace('T', ' ').substring(0, 19)
}
