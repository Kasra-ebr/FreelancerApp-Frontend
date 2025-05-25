import React, { useState } from "react";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

import RadioInput from "../../UI/RadioInput";

function CompleteProfileForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={submitHandler}>
          <TextField
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            name="role"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              name="role"
              value="OWNER"
              id="OWNER"
              label="Owner"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              name="role"
              value="FREELANCER"
              id="FREELANCER"
              label="Freelancer"
              onChange={(e) => setRole(e.target.value)}
               checked={role === "FREELANCER"}
            />
          </div>
          <Button className="btn btn-primary w-full">Complete</Button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;




/* So every radio button has:

The same name (e.g., "role") so the browser groups them.

A unique value (e.g., "OWNER" or "FREELANCER").

A checked prop that React sets to true for the one that matches the current state. */