import * as types from './actionType'

function editorReducer(state = {}, action) {
  const { type, payload } = action;
  switch(type) {
    case types.UPDATE_EDITOR_REDUCER:
      return { ...state, ...payload }
    default:
      return state;
  }
}

export default editorReducer