// lib/apiService.ts
import axiosInstance from "./axiosInstance";

export async function apiRequest<T>(
  method: "GET" | "POST" | "PATCH" | "DELETE",
  url: string,
  data?: object,
  params?: object
): Promise<T> {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
}
