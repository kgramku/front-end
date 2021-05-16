import React, { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [changepassword, setChangePassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <FormItem onSubmit={handleSubmit}>
        <label>Password</label>
        <input
          required
          placeholder="enter old password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Change Password</label>
        <input
          required
          placeholder="enter new password"
          type="password"
          name="password"
          value={changepassword}
          onChange={(e) => setChangePassword(e.target.value)}
        />
      </FormItem>
    </div>
  );
};

export default ChangePassword;
