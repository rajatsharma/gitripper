import { hashHistory } from 'react-router'
import { call, put, takeLatest, select } from 'redux-saga/effects' //eslint-disable-line
// import { delay } from 'redux-saga'
import actionSpreader from '../../utils/actionspreader'
// import request from '../../utils/request'
// import { basicProfileTransformer } from './transformers'

export function* ripUser (action) {
  const home = yield select(state => state.home)
  if (home.userName === '') {
    yield put(actionSpreader('SETERROR'))
    return
  }
  hashHistory.push(`/${home.userName}`)
  yield put(actionSpreader('ROUTECHANGE'))
}

export function* rootSaga () {
  yield takeLatest('RIPUSER', ripUser)
}

export default [rootSaga]
