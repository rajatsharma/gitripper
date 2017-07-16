import { call, put, takeLatest } from 'redux-saga/effects' //eslint-disable-line
// import { delay } from 'redux-saga'
import actionSpreader from '../../utils/actionspreader'
import request from '../../utils/request'
import { basicProfileTransformer } from './transformers'

export function* githubUserListener (action) {
  const userId = action.payload.user.split('/')[1]
  const requestUrl = `https://api.github.com/users/${userId}`
  try {
    const UserProfile = yield call(request, requestUrl)
    yield put(actionSpreader('SHOWBASICPROFILEDETAILS', { basicProfile: basicProfileTransformer(UserProfile) }))
  } catch (e) {
    yield put(actionSpreader('SHOWTOAST', { content: 'Github API Error', danger: true }))
  }
}

export function* rootSaga () {
  yield takeLatest('GETGITHUBUSER', githubUserListener)
}

export default [rootSaga]
