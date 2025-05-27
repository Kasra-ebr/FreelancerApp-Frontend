import React from "react";

import AuthContainer from "../Features/Authentication/AuthContainer";

function Auth() { 
  return (
    <div className="container xl:max-w-screen-xl mx-auto px-4 ">
      <div className="flex justify-center pt-12">
     <AuthContainer/>
      </div>
    </div>
  );
}

export default Auth;
