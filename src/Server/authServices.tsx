import http from "./httpServices";

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

// Step 1: Fake OTP request
export async function getOTP({ phoneNumber }) {
  const otp = "000000"; // you can randomize if you want
  localStorage.setItem("otp", otp);
  localStorage.setItem("phoneNumber", phoneNumber);
  return { message: `OTP sent to ${phoneNumber}` };
}

// Step 2: Fake OTP verification
export async function checkOTP({ phoneNumber, otp }) {
  const savedOtp = localStorage.getItem("otp");
  const savedPhone = localStorage.getItem("phoneNumber");

  if (phoneNumber !== savedPhone || otp !== savedOtp) {
    throw {
      response: {
        data: {
          message: "Invalid OTP or phone number",
        },
      },
    };
  }

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return {
    message: "OTP verified successfully!",
    user: {
      isActive: !!user.name, // means profile is completed
      status: 2,
      role: user.role || null,
    },
  };
}

// Step 3: Fake profile completion
export async function completeProfile(data) {
  localStorage.setItem("user", JSON.stringify(data));
  return {
    message: "Profile completed!",
    user: {
      ...data,
      status: 2,
    },
  };
}

export async function getUser () {
const {data} = await http.get("/user/profile")
return data
}