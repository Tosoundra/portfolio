import { showTooltip } from '../../../store/reducers/infoTooltip/showTooltip';
import { setLoggedOut } from '../../../store/reducers/logged/logged.slice';
import { AppDispatch } from '../../../store/store';
import { SERVER_SIGN_OUT_URL } from '../URLs/serverAPI/authAPI';
import { getRequest } from '../requestMethods/requestMethods';

export const logout = () => {
  return async function (dispatch: AppDispatch) {
    try {
      await getRequest(SERVER_SIGN_OUT_URL);
      dispatch(setLoggedOut());
    } catch (error) {
      if (error instanceof Error) dispatch(showTooltip(error.message));
      throw error;
    }
  };
};
