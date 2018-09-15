import { handleActions } from 'redux-actions'

import { usersFailure, usersSuccess, usersRequest, changeUserStatus } from './actions'

const initialState = { data: {}, loading: false, error: null }

export const USERS_REDUCER_NAME = 'users'

export default handleActions({
  [usersSuccess]: (state, action) => ({
    ...initialState,
    data: (action.payload || [])
      .reduce((acc, { login, ...rest }) => {
        acc[login.uuid] = {
          login,
          ...rest,
        }

        return acc
      }, {}),
  }),
  [usersRequest]: () => ({
    ...initialState,
    loading: true,
  }),
  [usersFailure]: (state, action) => ({
    ...initialState,
    error: action.payload,
  }),
  [changeUserStatus]: (state, { payload }) => ({
    ...state,
    data: {
      ...state.data,
      [payload.id]: {
        ...state.data[payload.id],
        hireStatus: payload.newHireStatus,        
      },
    },
  }),
}, initialState)
