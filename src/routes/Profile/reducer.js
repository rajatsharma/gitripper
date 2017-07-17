import reducer from '../../futils/reducer'

// ------------------------------------
// Constants
// ------------------------------------
// Constants Here
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  SHOWBASICPROFILEDETAILS: (s, a) => ({ ...s, basicProfile: a.payload.basicProfile }),
  SHOWUSERREPOS: (s, a) => ({ ...s, repos: a.payload.repos })
}

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  basicProfile: null,
  repos: []
}

export default reducer(initialState, ACTION_HANDLERS)
