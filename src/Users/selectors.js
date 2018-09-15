import { USERS_REDUCER_NAME } from './reducer'

export const selectUsers = state => state[USERS_REDUCER_NAME].data
export const selectIsUsersRequestPending = state => state[USERS_REDUCER_NAME].loading
