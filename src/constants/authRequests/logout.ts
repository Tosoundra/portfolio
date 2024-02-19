import { setLoggedOut } from '../../store/reducers/logged/logged.slice';
import { AppDispatch } from '../../store/store';
import { authAPI } from '../API/serverAPI/authAPI';

export const logout = () => {
  return async function (dispatch: AppDispatch) {
    await authAPI.logout();
    dispatch(setLoggedOut());
  };
};
