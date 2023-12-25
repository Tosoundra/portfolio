type MethodType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type RequestType = <T>(url: string, method: MethodType) => Promise<T>;

export const request: RequestType = async (url, method) => {
  try {
    const response = (
      await fetch(url, {
        method: method,
      })
    ).json();

    const data = await response;

    if (data.error) {
      const { error } = data;

      throw new Error(error);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
  }
};
