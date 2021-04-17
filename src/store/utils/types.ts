import { Commit as VuexCommit, Dispatch as VuexDispatch } from 'vuex'

export interface Commit {
  commit: VuexCommit,
}

export interface Dispatch {
  dispatch: VuexDispatch
}
