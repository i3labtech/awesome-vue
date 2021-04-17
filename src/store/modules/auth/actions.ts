import HTTP from '@/store/utils/actions'
import { ActionTypes, LoginRequest, MutationTypes, UserProfile } from './types'
import { Commit, Dispatch } from '../../utils/types'
import LocalStorage from '@/store/utils/localstorage'

const URL_LOGIN = 'auth/login'

export default {

  async [ActionTypes.LOGIN] ({ dispatch } : Dispatch, payload: LoginRequest): Promise<void> {
    // TODO: Move to Service ?
    const response = await HTTP.post(URL_LOGIN, {
      username: payload.username,
      password: payload.password
    })

    if (response?.status === 200 && response?.data.auth) {
      dispatch(ActionTypes.SET_TOKEN, response.data.token)
      dispatch(ActionTypes.SET_USER, response.data.user)
    }
  },

  async [ActionTypes.LOAD_TOKEN] ({ commit } : Commit) {
    const token = LocalStorage.getLocalStorageItem('USER_TOKEN')
    const user = LocalStorage.getLocalStorageItem('USER')
    if (!token || !user) {
      throw new Error('Error status code 401:Unauthorized. Reason: Token or User not found')
    }
    commit(MutationTypes.SET_AUTH_TOKEN, token)
    commit(MutationTypes.SET_USER, user)
  },

  [ActionTypes.SET_USER] ({ commit } : Commit, payload: UserProfile) {
    commit(MutationTypes.SET_USER, payload)
    LocalStorage.setLocalStorageItem('USER', payload)
  },

  [ActionTypes.SET_TOKEN] ({ commit } : Commit, payload: string) {
    commit(MutationTypes.SET_AUTH_TOKEN, payload)
    LocalStorage.setLocalStorageItem('USER_TOKEN', payload)
  },

  async [ActionTypes.LOGOUT] ({ commit }: any) {
    commit(MutationTypes.SET_AUTHENTICATION, {
      token: '',
      user: {}
    })
  }
}
