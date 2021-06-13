import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 20px auto;
  width: 100%;
  /* border: box-sizing; */

  background: #6ec6ba;
  border-radius: 15px;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    margin: 20px;
    height: 400px;
    align-items: center;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    background: none;
  }

  .changepassword {
    margin: 0 250px;
  }
  label {
    margin-top: 10px;

    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
  input {
    margin-top: 5px;
    /* box-sizing: border-box; */
    width: 100%;
    background: none;

    height: 30px;
    border: none;
    border-bottom: 2px solid #9de4da;

    @media (max-width: 600px) {
      width: 100%;

      border: none;
      border-bottom: 2px solid #9de4da;
    }
    @media (max-width: 768px) {
      width: 100%;
    }

    &:focus {
      outline: none;
    }
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 30px;
`;
const FormButton = styled.div`
  width: 200px;
  button {
    margin: 20px;
    width: 100%;
    padding: 10px;
    background: teal;
    border: none;
    color: white;

    font-weight: bold;

    @media (max-width: 600px) {
      width: 100%;
      margin: 0;
      margin-top: 10px;
      font-size: 20px;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [changepassword, setChangePassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setPassword("");
    setChangePassword("");
  };
  return (
    <div>
      <FormWrapper>
        <FormItem onSubmit={handleSubmit}>
          <label>Password</label>
          <input
            required
            placeholder="enter old password"
            type="password"
            name="password1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <label>Change Password</label>
          <input
            required
            placeholder="enter new password"
            type="password"
            name="password2"
            value={changepassword}
            onChange={(e) => setChangePassword(e.target.value)}
          />
        </FormItem>

        <FormButton>
          <button type="submit" className="btn">
            Change Password
          </button>
        </FormButton>
      </FormWrapper>
    </div>
  );
};

export default ChangePassword;
