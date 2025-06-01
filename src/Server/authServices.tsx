

/* export async function getOTP(data) {
  const { data: responseData } = await http.post("/user/getOTP", data);
  return responseData;
}

export async function checkOTP(data) {
  const { data: responseData } = await http.post("/user/checkOTP", data);
  return responseData;
}


export async function complete(data) {
  const { data: responseData } = await http.post("/user/checkOTP", data);
  return responseData;
}


export async function getUser () {
cosnt {data} = await http.get("/user/profile")) 
return data
}


 */
// authServices.ts
import http from "./httpServices";

// Step 1: Fake OTP request
export async function getOTP({ phoneNumber }: { phoneNumber: string }) {
  const otp = "000000";
  localStorage.setItem("otp", otp);
  localStorage.setItem("phoneNumber", phoneNumber);
  return { message: `OTP set to ${otp}` };
}

// Step 2: Fake OTP verification
export async function checkOTP({
  phoneNumber,
  otp,
}: {
  phoneNumber: string;
  otp: string;
}) {
  const savedOtp = localStorage.getItem("otp");
  // phoneNumber is not actually validated here, but accepted for compatibility
  if (!otp) {
    throw { response: { data: { message: "OTP is required" } } };
  }
  if (otp !== savedOtp) {
    throw { response: { data: { message: "Invalid OTP" } } };
  }
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return {
    message: "OTP verified successfully!",
    user: {
      isActive: !!user.name,
      status: 2,
      role: user.role || null,
    },
  };
}

// Step 3: Fake profile completion
export async function completeProfile(data: any) {
  localStorage.setItem("user", JSON.stringify(data));
  return {
    message: "Profile completed!",
    user: { ...data, status: 2 },
  };
}

// Real API call to get user profile
export async function getUser() {
  const { data } = await http.get("/user/profile");
  return data;
}
