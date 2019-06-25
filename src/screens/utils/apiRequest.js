import axios from "axios";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export default async function apiRequest(url, data, isPostRequest) {
  const instance = axios.create({
    timeout: 1000 * 60 * 1,
    headers: { "Content-Type": "application/json" }
  });

  try {
    var response;
    if (isPostRequest) {
      response = await instance.post(url, data);
    } else {
      response = await instance.get(url);
    }
    const response_data = await response.data;
    return response_data;
  } catch (error) {
    return error;
  }
}
