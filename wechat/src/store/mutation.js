import * as types from './mutation-type'

const mutations = {
  [types.SET_MEDICAL_HISTORY] (state, content) {
    state.medicalHistory = content
  },
  [types.SET_OTHER_INFO] (state, content) {
    state.otherInfo = content
  }
}

export default mutations
