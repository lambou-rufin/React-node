const toMin = (input: any) => {
  const value = input.split(':')
  const hour = parseInt(value[0])
  const min = value[1] !== undefined ? parseInt(value[1]) : 0
  const time = hour * 60 + min
  return time
}

export default toMin
