export const setDate = (date) => {
  return date.substring(0, date.lastIndexOf('T'))
}