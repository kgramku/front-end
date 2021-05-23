import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  max-width: 700px;
  margin: 20px auto;

  background: #6ec6ba;
  border-radius: 15px;
  /* border: box-sizing; */

  .EditProfile {
    margin: 0 250px;
  }

  .Pp {
    display: none;
    margin: 10px;
  }

  label {
    margin-top: 10px;
  }
  input {
    margin: 5px;
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

  p {
    text-align: center;
    color: teal;
    font-weight: bold;

    :hover {
      background-color: #9de4da;
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
      <div className="EditProfile">
        <ImageWrapper
          src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          alt="ProfilePic"
        />
        <label>
          <div className="changeProfile">
            <input className="Pp" type="file" />
            <p>Choose a Profile Pic</p>
          </div>
        </label>
        <UpdateChange>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
