import reducer from '../../futils/reducer'

// ------------------------------------
// Constants
// ------------------------------------
// Constants Here
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  CHANGEUSERNAME: (s, a) => ({ ...s, userName: a.payload.userName }),
  SETERROR: (s, a) => ({ ...s, error: true })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  userName: '',
  error: false
}

export default reducer(initialState, ACTION_HANDLERS)
