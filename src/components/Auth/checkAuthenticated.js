import { loginSuccess } from '../../app/features/AuthSlice';

export const isAuthenticated = () => (dispatch) => {
  const storedUserInfoStatus = localStorage.getItem('userInfo');

  if (storedUserInfoStatus) {
    const userInfo = JSON.parse(storedUserInfoStatus);
    dispatch(loginSuccess(userInfo));
  }
};
