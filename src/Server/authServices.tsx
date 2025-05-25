import http from "./httpServices";

export async function getOTP(data) {
  const { data: responseData } = await http.post("/user/getOTP", data);
  return responseData;
}

export async function checkOTP(data) {
  const { data: responseData } = await http.post("/user/checkOTP", data);
  return responseData;
}
