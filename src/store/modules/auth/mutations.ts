
import { LoginResponse, MutationTypes, State } from './types'
import LocalStorage from '../../utils/localstorage'

export default {
  [MutationTypes.SET_AUTHENTICATION] (state: State, payload: LoginResponse): void {
    state.token = payload.token
    state.user = payload.user
    LocalStorage.setLocalStorageItem('USER_TOKEN', state.token)
    LocalStorage.setLocalStorageItem('USER', state.user)
  }

}
