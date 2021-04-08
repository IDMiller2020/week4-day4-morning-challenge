function minuteConverter (minutes) {
  let hours = 0
  let minutesRemaining = 0
  hours = Math.floor(minutes / 60)
  minutesRemaining = minutes - (hours * 60)
  console.log(`${minutes} minutes is equal to ${hours}:${minutesRemaining} (hr:min)`)
}

minuteConverter(65)
minuteConverter(122)
minuteConverter(25)
minuteConverter(170)
minuteConverter(26397)


// Mark's solution
// let minutesRemaining = minutes % 60
// let hours = (minutes - minutesRemaining)