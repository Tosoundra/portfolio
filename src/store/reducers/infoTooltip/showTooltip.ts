import { AppDispatch } from '../../store';
import { setActive, setErrorActive, setInactive } from './infoTooltip.slice';

export const showTooltip = (payload: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(setActive(payload));

    new Promise((resolve) =>
      setTimeout(() => {
        resolve(dispatch(setInactive()));
      }, 3000),
    );
  };
};

export const showErrorTooltip = (payload: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(setErrorActive(payload));

    new Promise((resolve) =>
      setTimeout(() => {
        resolve(dispatch(setInactive()));
      }, 3000),
    );
  };
};
