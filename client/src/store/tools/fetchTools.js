import { getLSItem } from "../../utils/localStorage";
import { lsProps } from "../../utils/lsProps";

export const isProduction = process.env.NODE_ENV === "production";
export const baseUrl = "/api/v1";
export const proxy = isProduction
  ? ""
  : "https://cjw00spz-5000.euw.devtunnels.ms";

export const authConfig = (isFormData) => {
  const token = getLSItem(lsProps.token);

  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }
  return { headers };
};

export const fetchRequest = async (
  fetchUrl,
  method = "GET",
  body = null,
  conf
) => {
  const filteredBody = {};

  const isFormData = body instanceof FormData;

  const config = conf || authConfig(isFormData);
  if (body && !isFormData) {
    for (let key in body) {
      if (body[key]) {
        filteredBody[key] = body[key];
      }
    }
  }

  const response = await fetch(`${proxy}${baseUrl}${fetchUrl}`, {
    method: method,
    body: !body || isFormData ? body : JSON.stringify(filteredBody),
    ...config,
  });

  const resData = await response.json();

  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { message: resData, status: response.status };
  }
  return resData;
};

export const createFormData = (data) => {
  const formData = new FormData();

  for (let key in data) {
    const item = data[key];
    if (!item && item !== 0) continue;
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        formData.append(`${key}[]`, item[i]);
      }
    } else {
      formData.append(key, item);
    }
  }

  return formData;
};

export const setFormError = (error) => {
  let payload = "Error";
  if (error?.message?.error?.errors) {
    payload = error?.message?.error?.errors;
  }

  return payload;
};
