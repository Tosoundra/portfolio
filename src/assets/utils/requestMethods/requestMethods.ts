import { showErrorTooltip } from '../../../store/reducers/infoTooltip/showTooltip';
import { store } from '../../../store/store';
import { serverErrorMessage } from '../errorMessage/errorMessage';

type RequestType = <T>(url: string, data: unknown) => Promise<T>;

const errorHandle = (error: unknown) => {
  if (error instanceof TypeError) store.dispatch(showErrorTooltip(serverErrorMessage));
  if (error instanceof Error) store.dispatch(showErrorTooltip(error.message as string));
};

export const getRequest = async <T>(url: string): Promise<T | undefined> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) throw error;
  }
};

export const postRequest: RequestType = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
    errorHandle(error);
  }
};

export const deleteRequest = async <T>(url: string): Promise<T | undefined> => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
    errorHandle(error);
  }
};

export const putRequest = async <T>(url: string): Promise<T | undefined> => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      credentials: 'include',
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
    errorHandle(error);
  }
};

export const patchRequest: RequestType = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
    errorHandle(error);
  }
};
