import { createAction } from 'redux-actions'

export const GET_USERS = 'GET_USERS'
export const getUsers = createAction(GET_USERS)

export const usersRequest = createAction('USERS_REQUEST')
export const usersSuccess = createAction('USERS_SUCCESS')
export const usersFailure = createAction('USERS_FAILURE')

export const changeUserStatus = createAction('CHANGE_USER_STATUS')
