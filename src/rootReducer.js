import { combineReducers } from 'redux'

import usersReducer, { USERS_REDUCER_NAME } from './Users/reducer'

export default combineReducers({
  [USERS_REDUCER_NAME]: usersReducer,
})
