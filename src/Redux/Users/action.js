import axios from "axios";

export const USER_DATA = "USER_DATA";
export const USER_DATA_LOADING = "USER_DATA_LOADING";
export const USER_DATA_ERROR = "USER_DATA_ERROR";

export const getUserData = (user) => ({ type: USER_DATA, payload: user });
export const userDataLoading = () => ({ type: USER_DATA_LOADING });
export const userDataError = () => ({ type: USER_DATA_ERROR });

export const regUserRequest = (Name, Email, Pass) => async (dispatch) => {
  axios
    .post("http://localhost:8080/users", {
      name: Name,
      email: Email,
      password: Pass,
    })
    .then(({ data }) => {
      console.log(data);
      alert("You are successfully registered.");
    })
    .catch((err) => {
      console.log(err);
    });
};
