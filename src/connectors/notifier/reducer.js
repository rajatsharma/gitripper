import reducer from '../../futils/reducer'

const NotificatonActionHandlers = {
  SHOWTOAST: (s, a) => ({ ...s, toasted: true, content: a.payload.content, danger: a.payload.danger }),
  HIDETOAST: (s, a) => ({ ...s, toasted: false, danger: false })
}

const NotifierInit = { toasted: false, content: '', danger: false }

export default reducer(NotifierInit, NotificatonActionHandlers)
