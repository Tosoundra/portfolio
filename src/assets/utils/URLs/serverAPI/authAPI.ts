import { getRequest, postRequest } from '../../requestMethods/requestMethods';
import { SERVER_API } from './serverAPI';

class AuthApi {
  BASE_URL: string;
  SERVER_SIGN_UP_URL: string;
  SERVER_SIGN_IN_URL: string;
  SERVER_SIGN_OUT_URL: string;

  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
    this.SERVER_SIGN_UP_URL = `${this.BASE_URL}/sign-up`;
    this.SERVER_SIGN_IN_URL = `${this.BASE_URL}/sign-in`;
    this.SERVER_SIGN_OUT_URL = `${this.BASE_URL}/sign-out`;
  }

  async register(name: string, email: string, password: string) {
    return await postRequest<{ message: string }>(this.SERVER_SIGN_IN_URL, {
      name,
      email,
      password,
    });
  }
  async login(email: string, password: string) {
    return await postRequest<{ message: string }>(this.SERVER_SIGN_IN_URL, { email, password });
  }
  async logout() {
    return await getRequest(this.SERVER_SIGN_OUT_URL);
  }
}

export const authAPI = new AuthApi(SERVER_API);
