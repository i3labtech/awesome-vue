import HTTP from '@/store/utils/actions'
import { ActionTypes, LoginRequest, LoginResponse, MutationTypes } from './types'
import { Commit } from 'vuex'

const URL_LOGIN = 'auth/login'

interface Comite {
  commit: Commit
}
export default {
  async [ActionTypes.LOGIN] ({ commit } : Comite, payload: LoginRequest): Promise<void> {
    console.log(payload)
    const response = await HTTP.post(URL_LOGIN, {
      username: payload.username,
      password: payload.password
    })

    if (response?.status === 200 && response?.data.auth) {
      commit(MutationTypes.SET_AUTHENTICATION, {
        token: response.data.token,
        user: response.data.user
      } as LoginResponse)
    }
  },

  async [ActionTypes.LOGOUT] ({ commit }: any) {
    commit(MutationTypes.SET_AUTHENTICATION, {
      token: '',
      user: {}
    })
  }

}
