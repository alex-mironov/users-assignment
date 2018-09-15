import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import * as actions from './actions'

function* getUsersFlow() {
  try {
    yield put(actions.usersRequest())
    const users = yield call(api.getUsers)
    yield put(actions.usersSuccess(users))
  } catch (err) {
    yield put(actions.usersFailure(err))
  }
}

export default function* usersWatcher() {
  yield takeLatest(actions.GET_USERS, getUsersFlow)
}
