interface HttpReqRes<T_Req = unknown, T_Res = unknown> {
    req: T_Req;
    res: T_Res;
  }

  interface ApiEndpointInfo {
    url: string;
    method: "GET" | "POST" | "PATCH";
  }

// API Req, Res 타입 정의
export interface ApiEndpoint {
  getUsers: HttpReqRes<undefined, User[]>
}

// API Endpoint 정보
export const apiEndpoint: Record<keyof ApiEndpoint, ApiEndpointInfo> = {
  getUsers: {
    url: "/api/users",
    method: "GET",
  },
};