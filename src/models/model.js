// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

let GATEWAY = API_URL;

export default class Model {
  saveToken(token) {
    localStorage.setItem('web_token', token);
  }
  clearToken() {
    localStorage.removeItem('web_token');
  }
  getToken() {
    return localStorage.getItem('web_token');
  }
  composeFullUrl(url) {
    let fullPath = GATEWAY + url;
    console.log('current url is ---->' + fullPath);
    return fullPath;
  }
  async fetch_get(url, options) {
    return request(this.composeFullUrl(url), {
      method: 'GET',
      headers: {
        token: this.getToken(),
      },
      ...(options || {}),
    });
  }
  async raw_get(url, options) {
    console.log(this.getToken());
    return request(url, {
      method: 'GET',
      headers: {
        token: this.getToken(),
      },
      ...(options || {}),
    });
  }
  async fetch_post(url, body, options) {
    let params = { params: body };
    return request(this.composeFullUrl(url), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: this.getToken(),
      },
      data: params,
      ...(options || {}),
    });
  }

  async raw_post(url, body, options) {
    let params = { params: body };
    return request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: this.getToken(),
      },
      data: params,
      ...(options || {}),
    });
  }
}
