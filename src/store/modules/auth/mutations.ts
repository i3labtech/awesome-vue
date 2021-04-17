import { MutationTypes, State, UserProfile } from './types'

export default {

  [MutationTypes.SET_USER] (state: State, payload: UserProfile): void {
    state.user = payload
  },

  [MutationTypes.SET_AUTH_TOKEN] (state: State, payload: string): void {
    state.token = payload
  }
}
