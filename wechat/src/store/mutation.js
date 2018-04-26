import * as types from './mutation-type'

const mutations = {
  [types.SET_COMMON_PEOPLE] (state, info) {
    state.commonPeople = info
  }
}

export default mutations
