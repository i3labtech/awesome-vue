export interface State {
  name: string,
  email: string
}

export enum ActionTypes {
  RETRIEVE_PROFILE = 'retrieveProfile',
  UPDATE_PROFILE = 'updateProfile',
  SET_PROFILE = 'setProfile'
}

export enum MutationTypes {
  SET_PROFILE = 'setProfile'
}
