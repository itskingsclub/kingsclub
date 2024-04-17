import APIKit from "./baseApi";

export async function registerApi(payload) {
  try {
    const response = await APIKit.post(`/user/register`, payload);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return { error: 'No response from the server' };
    } else {
      return { error: 'Request setup error' };
    }
  }
}

export async function loginApi(payload) {
  try {
    const response = await APIKit.post(`/user/login`, payload);
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
}

export async function verifyotpApi(payload) {
  try {
    const response = await APIKit.post(`/user/verify-pin`, payload);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data);
    return error?.response?.data;
  }
}

export async function getCancationContent() {
  try {
    const response = await APIKit.get(`/content/cancelation`);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data);
    return error?.response?.data;
  }
}

export async function getRefundDataContent() {
  try {
    const response = await APIKit.get(`/content/refund`);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data);
    return error?.response?.data;
  }
}


