const formatPeriod = (startDate: string, endDate?: string) => {
  if (!endDate || endDate === startDate) {
    return `${startDate}`
  }
  return `${startDate}  —  ${endDate}`
}

const formatPeriodWithSince = (startDate: string, endDate?: string) => {
  if (endDate) {
    return `${startDate}  —  ${endDate}`
  }
  return `desde ${startDate}`
}

export { formatPeriod, formatPeriodWithSince }
