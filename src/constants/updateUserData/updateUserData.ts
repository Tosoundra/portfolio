import { showTooltip } from '../../store/reducers/infoTooltip/showTooltip';
import { updateUser } from '../../store/reducers/user/user.slice';
import { AppDispatch } from '../../store/store';
import { userAPI } from '../URLs/serverAPI/userAPI';

export const updateUserData = (email: string, newPassword: string, oldPassword: string) => {
  return async function (dispatch: AppDispatch) {
    const { message } = await userAPI.updateUserData(email, newPassword, oldPassword);
    dispatch(updateUser({ email, newPassword }));
    dispatch(showTooltip(message));
  };
};
