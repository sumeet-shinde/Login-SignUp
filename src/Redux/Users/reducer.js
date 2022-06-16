import { USER_DATA, USER_DATA_ERROR, USER_DATA_LOADING } from "./action";

const initState = {
  user: [],
  loading: false,
  error: false,
};

export const UserReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case USER_DATA:
      return { ...store, user: payload, loading: false, error: false };

    case USER_DATA_LOADING:
      return { ...store, loading: true };

    case USER_DATA_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
