export interface IUser {
  email: string;
}

export type InitialState = {
  user: IUser | null;
  loading: boolean;
};

export enum UserActionTypes {
  SET_LOADING = "SET_LOADING",
  SET_USER = "SET_USER",
}

export type SetLoadingUserAction = {
  type: UserActionTypes.SET_LOADING;
  payload: boolean;
};

export type SetUserUserAction = {
  type: UserActionTypes.SET_USER;
  payload: IUser | null;
};

export type UserActions = SetLoadingUserAction | SetUserUserAction;
