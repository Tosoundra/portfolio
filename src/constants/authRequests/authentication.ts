import { setLoggedIn, setLoggedOut } from '../../store/reducers/logged/logged.slice';
import { AppDispatch } from '../../store/store';
import { userAPI } from '../../API/serverAPI/userAPI';

export const authentication = () => {
  return async function (dispatch: AppDispatch) {
    try {
      await userAPI.checkToken();

      dispatch(setLoggedIn());
    } catch (error) {
      dispatch(setLoggedOut());
    }
  };
};
