import { call, put, takeLatest, all } from 'redux-saga/effects' //eslint-disable-line
// import { delay } from 'redux-saga'
import actionSpreader from '../../utils/actionspreader'
import request from '../../utils/request'
import { basicProfileTransformer } from './transformers'

export function * githubUserListener (action) {
  const userId = action.payload.user.split('/')[1]
  const requestUrls = [
    `https://api.github.com/users/${userId}`, `https://api.github.com/users/${userId}/repos?per_page=100`
  ]
  try {
    const [UserProfile, UserRepos] = yield all(requestUrls.map(x => call(request, x)))
    yield put(actionSpreader('SHOWBASICPROFILEDETAILS', { basicProfile: basicProfileTransformer(UserProfile) }))
    yield put(actionSpreader('SHOWUSERREPOS', { repos: UserRepos }))
  } catch (e) {
    yield put(actionSpreader('SHOWTOAST', { content: 'Github API Error', danger: true }))
  }
}

export function * rootSaga () {
  yield takeLatest('GETGITHUBUSER', githubUserListener)
}

export default [rootSaga]
