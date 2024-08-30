import axios from "axios";

import { ApiEndpoint, apiEndpoint } from "@/utils/api-dict";

const api = (function () {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    timeout: 10000,
  });

  return instance;
})();

const handleApiError = (error: unknown) => {
  // TODO: 에러 내용에 대한 toast 띄워보기 or ErrorBoundary 적용해보기
};

const apiRequest = async <T_Key extends keyof ApiEndpoint>(
  key: T_Key,
  req: ApiEndpoint[T_Key]["req"],
  pathParam?: string, // path param
): Promise<ApiEndpoint[T_Key]["res"]> => {
  const { url, method } = apiEndpoint[key];

  try {
    const res = await api.request({
      method,
      url: pathParam ? `${url}/${pathParam}` : url,
      data: method !== "GET" ? req : undefined, // request body
      params: method === "GET" ? req : undefined, // query parameter
    });

    return res.data;
  } catch (error) {
    handleApiError(error);
    throw Error;
  }
};

export default apiRequest;