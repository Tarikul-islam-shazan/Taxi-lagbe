import axios from 'axios';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const signUpRequest = () => ({
  type: SIGN_UP_REQUEST
});

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const signUpSuccess = payload => ({
  type: SIGN_UP_SUCCESS,
  payload
});

export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
const signUpError = errors => ({
  type: SIGN_UP_ERROR,
  errors
});

export const signUp = userData => (dispatch) => {
  dispatch(signUpRequest());
  console.log('whodze');

  axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users/userRegister`, JSON.stringify(userData), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(
      res => dispatch(signUpSuccess(res.data)),
      error => dispatch(signUpError(error))
    );
};
