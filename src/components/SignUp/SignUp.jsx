import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../.././images/logo.jpg";
import Validate from "./SignUpValidate";

const FormWrapper = styled.form`
  .error {
    color: #ff4848;
  }

  .form-login {
    margin-top: 50px;
    font-weight: bold;
    font-size: 18px;
    color: teal;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const ImageWrapper = styled.img`
  margin: 10px 0;
  width: 70px;
`;

const SignUpWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  .signup {
    width: 100%;
    max-width: 280px;
    border: 2px solid lightgrey;
    border-radius: 15px;
    padding: 30px;

    @media (max-width: 768px) {
      max-width: 400px;
      width: 100%;
    }

    @media (max-width: 600px) {
      border: none;
      width: 100%;
    }
  }
`;

const SignUpFormHeader = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  color: teal;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;

  @media (max-width: 600px) {
    text-align: justify;
  }

  .style {
  }
`;
const FormItem = styled.div`
  width: 100%;
  margin: 10px 0;

  @media (max-width: 786px) {
    font-size: 22px;
  }

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

    @media (max-width: 786px) {
      font-size: 22px;
    }
  }
`;

const BoldLink = styled.a`
  margin-top: 50px;
  font-size: 22px;
  color: teal;
  font-weight: bolder;
  text-decoration: underline;
`;

const SignUp = (ForSubmitForm) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      ForSubmitForm(true);
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validate(values));
    setIsSubmitting(true);

    // alert("account is created");
  };

  return (
    <SignUpWrapper>
      <div className="signup">
        <SignUpFormHeader>
          <p className="style">Welcome to KGram</p>
          <p>Create your account by filling out the information below. </p>

          <ImageWrapper src={Logo} alt="Logo" />
        </SignUpFormHeader>
        <FormWrapper onSubmit={handleSubmit}>
          <FormItem>
            <label>Username</label>
            <input
              placeholder="Please enter your username"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </FormItem>
          {errors.username && <p className="error">{errors.username}</p>}
          <FormItem>
            <label>Email</label>
            <input
              placeholder="Enter your ku student email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </FormItem>
          {errors.email && <p className="error">{errors.email}</p>}
          <FormItem>
            <label>Password</label>

            <input
              placeholder="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </FormItem>
          {errors.password && <p className="error">{errors.password}</p>}
          <FormButton>
            <button type="btnSubmit" className="btn">
              Sign Up
            </button>
          </FormButton>
          <span className="form-login">
            {/* Already have an account?
            <button variant="btn btn-success" onClick={() => "/Login"}>
              LogIn
            </button> */}
            Already have an account? <BoldLink href="./login">LogIn</BoldLink>
            {/* Already have an account? LogIn <a href="#">here</a> */}
          </span>
        </FormWrapper>
      </div>
    </SignUpWrapper>
  );
};

export default SignUp;
