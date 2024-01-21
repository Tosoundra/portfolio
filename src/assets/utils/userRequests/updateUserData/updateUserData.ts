import { showErrorTooltip, showTooltip } from '../../../../store/reducers/infoTooltip/showTooltip';
import { updateUser } from '../../../../store/reducers/user/user.slice';
import { AppDispatch } from '../../../../store/store';
import { SERVER_USER_URL } from '../../URLs/serverAPI/userAPI';
import { patchRequest } from '../../requestMethods/requestMethods';

export const updateUserData = (email: string, newPassword: string, oldPassword: string) => {
  return async function (dispatch: AppDispatch) {
    try {
      const { message } = await patchRequest<{ message: string }>(SERVER_USER_URL, {
        email,
        newPassword,
        oldPassword,
      });
      dispatch(updateUser({ email, newPassword }));
      dispatch(showTooltip(message));
    } catch (error) {
      if (error instanceof Error) dispatch(showErrorTooltip(error.message));
      console.log(error);
    }
  };
};
