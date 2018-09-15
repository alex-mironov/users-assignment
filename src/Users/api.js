import { USER_STATUSES } from './consts'

export const getUsers = () =>
  fetch('https://randomuser.me/api/?nat=gb&results=15')
    .then(response => response.json())
    .then(responseData => responseData && responseData.results)
    .then(users => users
      .map((user, index) => {
        const hireStatus = index % 2 === 0 ? USER_STATUSES.APPLIED : USER_STATUSES.INTERVIEWING // TODO just for testing of initial render
        return { ...user, hireStatus }
      })
    )
