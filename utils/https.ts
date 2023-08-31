import axios from "axios";

const formatUrl = (url: any, params: any) => {
  const param =
    params && Object.keys(params)?.length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : "";
  return `${url}${param}`;
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXCHANGE_URL,
  withCredentials: true,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const httpPost = (url: any, header: any, data: any, params = {}) =>
  new Promise((resolve) => {
    instance
      .post(formatUrl(url, params), data, { headers: header })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

export const httpGet = async (url: any, header: any, params = {}) =>
  new Promise((resolve) => {
    instance
      .get(formatUrl(url, params), { headers: header })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

export const httpPut = (url: any, header: any, data: any, params = {}) =>
  new Promise((resolve, reject) => {
    instance
      .put(formatUrl(url, params), data, { headers: header })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error.response);
      });
  });

export const httpPatch = (url: any, header: any, data: any, params = {}) =>
  new Promise((resolve) => {
    instance
      .patch(formatUrl(url, params), data, { headers: header })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

export const httpDelete = (url: any, header: any, params: any) =>
  new Promise((resolve, reject) => {
    instance
      .delete(formatUrl(url, params), { headers: header })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
