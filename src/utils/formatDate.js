export const formatDate = (date, withHours = false) => {
  const toFormat = new Date(date)
  return toFormat.toLocaleDateString('fr') + (withHours ? ' à ' + toFormat.toLocaleTimeString('fr') : '')
}