export const formatDate = (date: string) => {
  const dates = new Date(date)
  return `${String(dates.getDate()).padStart(2, '0')} ${dates.toLocaleString('default', {
    month: 'long',
  })} ${dates.getFullYear()}`
}

export const ifEqualDate = (date1D: string, date2D: string) => {
  const date1 = new Date(date1D)
  const date2 = new Date(date2D)

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

export const tranformDate = (date: string) => {
  const date1 = new Date(date)
  return ` ${date1.getDate()}-${date1.getMonth()}-${date1.getFullYear()}`
}
