import { State, MutationTypes } from './types'

export default {

  [MutationTypes.SET_PROFILE] (state: State, payload: State): void {
    state = payload
  }
}
