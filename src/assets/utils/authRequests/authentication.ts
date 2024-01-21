import { setLoggedIn } from '../../../store/reducers/logged/logged.slice';
import { AppDispatch } from '../../../store/store';
import { SERVER_USER_URL } from '../URLs/serverAPI/userAPI';
import { getRequest } from '../requestMethods/requestMethods';

export const authentication = () => {
  return async function (dispatch: AppDispatch) {
    try {
      await getRequest(SERVER_USER_URL);

      dispatch(setLoggedIn());
    } catch (error) {
      console.log(error);
    }
  };
};
