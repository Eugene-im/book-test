import { API_URL } from "./config";

export default class ApiGateway {
  get = async (path: string) => {
    const response = await fetch(`${API_URL}${path}`);
    const dto = response.json();
    return dto;
  };
  post = async (path: string, payload?: any) => {
    const response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(payload),
    });
    const dto = response.json();
    return dto;
  };
  put = async (path: string, payload?: any) => {
    const response = await fetch(`${API_URL}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(payload),
    });
    const dto = response.json();
    return dto;
  };
}
