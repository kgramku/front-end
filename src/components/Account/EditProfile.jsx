import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  max-width: 700px;
  margin: 20px auto;
  gap: 80px;
  width: 100%;
  background: #a79078;
  border-radius: 15px;
  /* border: box-sizing; */

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 20px;
    height: 40px;
    gap: 150px;
    align-items: center;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    margin: 0;
    background: none;
    flex-direction: column;
    align-items: center;
  }

  /* .EditProfile {
    align-items: center;
    margin: 0 250px;

    @media (max-width: 600px) {
      align-items: center;
    }
  } */

  .Profiledetail {
    display: flex;
    flex-direction: row;
  }
  .changeimg {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
      align-items: center;
    }
  }
  .Pp {
    display: none;
    margin: 10px;
  }

  label {
    margin-top: 10px;
    @media (max-width: 600px) {
      margin-top: 0px;

      font-size: 20px;
    }
  }
  input {
    margin: 5px;
    /* box-sizing: border-box; */
    width: 100%;
    background: none;

    height: 30px;
    border: none;
    border-bottom: 2px solid #bdb19a;

    &:focus {
      outline: none;
    }
  }

  p {
    text-align: center;
    color: #563d39;
    font-weight: bold;

    @media (max-width: 600px) {
      font-size: 20px;
    }

    :hover {
      background-color: #bdb19a;
      border-radius: 15px;
    }
  }
`;
const ImageWrapper = styled.img`
  flex: 1 1 120px;
  max-width: 120px;
  margin: 10px;
`;
const UpdateChange = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  @media (max-width: 600px) {
    /* margin: 0px; */
  }
`;
const FormButton = styled.div`
  button {
    margin: 10px;
    width: 100%;
    padding: 10px 0;
    background: #74655e;
    border: none;
    color: white;

    font-weight: bold;
  }
`;

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername("");
    setEmail("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className="changeimg">
        <ImageWrapper
          src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          alt="ProfilePic"
        />
        <label>
          <input className="Pp" type="file" />
          <p>Choose a Profile Pic</p>
        </label>
      </div>
      <div className="profiledetail">
        <UpdateChange>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </UpdateChange>
        <UpdateChange>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </UpdateChange>
        <FormButton>
          <button type="btnSubmit" className="btn">
            Submit
          </button>
        </FormButton>
      </div>
    </FormWrapper>
  );
};

export default EditProfile;
