export const USER_STATUSES = {
  APPLIED: 'APPLIED',
  INTERVIEWING: 'INTERVIEWING',
  HIRED: 'HIRED',
}

export const getNextStatus = (status) => {
  if (status === USER_STATUSES.HIRED) return null

  return status === USER_STATUSES.APPLIED ? USER_STATUSES.INTERVIEWING : USER_STATUSES.HIRED
}

export const getPrevStatus = (status) => {
  if (status === USER_STATUSES.APPLIED) return null

  return status === USER_STATUSES.HIRED ? USER_STATUSES.INTERVIEWING : USER_STATUSES.APPLIED
}
