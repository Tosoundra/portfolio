import { serverErrorMessage } from '../errorMessage/errorMessage';

type RequestType = <T>(url: string, data: unknown) => Promise<T>;

export const getRequest = async (url: string) => {
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
    if (error instanceof TypeError) {
      throw new Error(serverErrorMessage);
    }
    console.log(error);
    throw error;
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
    if (error instanceof TypeError) {
      throw new Error(serverErrorMessage);
    }
    throw error;
  }
};

export const deleteRequest = async (url: string) => {
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
    if (error instanceof TypeError) {
      throw new Error(serverErrorMessage);
    }
    console.log(error);
    throw error;
  }
};

export const putRequest = async (url: string) => {
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
    if (error instanceof TypeError) {
      throw new Error(serverErrorMessage);
    }
    console.log(error);
    throw error;
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
    if (error instanceof TypeError) {
      throw new Error(serverErrorMessage);
    }
    console.log(error);
    throw error;
  }
};
