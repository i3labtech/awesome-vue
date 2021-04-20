import HTTP from '@/store/utils/actions'
import { Commit, Dispatch } from '@/store/utils/types'
import { MutationTypes, State, ActionTypes } from './types'

const URL_PROFILE = 'profile'

export default {
  async [ActionTypes.RETRIEVE_PROFILE] ({ dispatch } : Dispatch) : Promise<void> {
    // TODO: Move to service?
    const response = await HTTP.get(URL_PROFILE)

    if (response?.status === 200) {
      dispatch(ActionTypes.SET_PROFILE, response.data)
    }
  },

  [ActionTypes.SET_PROFILE] ({ commit }: Commit, payload : State) : void {
    commit(MutationTypes.SET_PROFILE, payload)
  }
}
