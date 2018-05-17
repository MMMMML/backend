import * as types from './mutation-type'

const mutations = {
  [types.SET_COMMON_PEOPLE] (state, info) {
    state.commonPeople = info
  },
  [types.SET_MODAL_FLAG] (state, flag) {
    state.modalFlag = flag
  }
}

export default mutations
