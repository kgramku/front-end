import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../.././images/logo.jpg";
import Validate from "./LoginValidate";

const ImageWrapper = styled.img`
  margin: 10px 0;
  width: 70px;
`;
const LoginHeader = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px, 0;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding: 0px;
  }

  .Login {
    width: 100%;
    margin-top: 20px;
    max-width: 280px;
    border: 2px solid lightgrey;
    border-radius: 15px;
    padding: 30px;

    @media (max-width: 768px) {
      max-width: 400px;
      width: 100%;
    }

    @media (max-width: 600px) {
      max-width: 100%;
      width: 100%;
      margin: 10px 0px 0px 0px;
      border: none;
    }
  }
`;
const FormWrapper = styled.div`
  .error {
    color: #ff4848;
  }

  .form-signup {
    margin-top: 50px;
    font-weight: bold;
    font-size: 18px;
    color: teal;
    text-align: center;
    text-decoration: none;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  label {
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
const BoldLink = styled.a`
  padding-left: 10px;
  margin-top: 50px;
  font-size: 22px;
  font-weight: bolder;
  color: teal;
  text-decoration: underline;
`;
const FormItem = styled.div`
  width: 100%;
  margin: 10px 0;

  input {
    margin-top: 5px;
    box-sizing: border-box;
    width: 100%;

    height: 30px;
    border: none;
    border-bottom: 1px solid #6ec6ba;

    &:focus {
      outline: none;
    }
  }
`;

const FormButton = styled.div`
  width: 100%;

  button {
    margin-top: 10px;
    width: 100%;
    padding: 10px 0;
    background: teal;
    border: none;
    color: white;

    font-weight: bold;
  }
`;

const LoginFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, values } = e.target;
    setValues({
      ...values,
      [name]: values,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validate(values));
  };
  return (
    <LoginHeader>
      <div className="Login">
        <LoginFormHeader>
          <ImageWrapper src={Logo} alt="Logo" />
        </LoginFormHeader>

        <FormWrapper onSubmit={handleSubmit}>
          <label>Username</label>
          <div className="login">
            <FormItem>
              <input
                required
                placeholder="username"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </FormItem>
            {errors.username && <p className="error">{errors.username}</p>}
            <FormItem>
              <label>Password</label>
              <input
                required
                placeholder="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </FormItem>
            {errors.password && <p className="error">{errors.password}</p>}
            <FormButton>
              <button type="Submit" className="btn">
                LogIn
              </button>
            </FormButton>
          </div>
          <span className="form-signup">
            Do not have an account? Create an account
            <BoldLink href="./signup">SignUP</BoldLink>
          </span>
        </FormWrapper>
      </div>
    </LoginHeader>
  );
};

export default Login;
