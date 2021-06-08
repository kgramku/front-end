import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 20px auto;
  /* border: box-sizing; */

  background: #6ec6ba;
  border-radius: 15px;

  @media only screen and (min-width: 0px) and (max-width: 468px) {
    width: 100%;
    height: 100%;
  }

  .changepassword {
    margin: 0 250px;
  }
  label {
    margin-top: 10px;
  }
  input {
    margin-top: 5px;
    /* box-sizing: border-box; */
    width: 100%;
    background: none;

    height: 30px;
    border: none;
    border-bottom: 2px solid #9de4da;

    &:focus {
      outline: none;
    }
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const FormButton = styled.div`
  button {
    margin: 10px;
    width: 100%;
    padding: 10px 0;
    background: teal;
    border: none;
    color: white;

    font-weight: bold;
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
        <div className="changepassword">
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
        </div>
      </FormWrapper>
    </div>
  );
};

export default ChangePassword;
