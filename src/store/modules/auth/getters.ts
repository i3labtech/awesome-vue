import { GettersTypes, State } from './types'

export default {

  [GettersTypes.HAS_TOKEN] (state: State) : string {
    return state.token
  }
}
