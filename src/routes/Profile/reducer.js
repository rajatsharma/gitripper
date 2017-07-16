import reducer from '../../futils/reducer'

// ------------------------------------
// Constants
// ------------------------------------
// Constants Here
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  SHOWBASICPROFILEDETAILS: (s, a) => ({ ...s, basicProfile: a.payload.basicProfile })
}

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  basicProfile: null
}

export default reducer(initialState, ACTION_HANDLERS)
