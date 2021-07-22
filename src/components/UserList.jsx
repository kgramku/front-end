import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-between;
  gap: 30px;

  padding: 10px;

  background-color: #6ec6ba;
  border-radius: 15px;
  width: 100%;
  height: 100%;

  .username {
    margin-left: 10px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const ImageWrapper = styled.img`
  margin: 10px 0px 0px 10px;
  max-width: 120px;
`;
const FollowBotton = styled.button`
  margin-left: 10px;
  width: 120px;
  padding: 10px 0;
  background: teal;
  border: none;
  color: white;

  font-weight: bold;
`;

const UserList = () => {
  return (
    <ListWrapper>
      <div>
        <ImageWrapper
          src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          alt="user profile"
        />
        <div className="username">
          <p>Diya Manandhar</p>
        </div>
        <FollowBotton type="submit">Follow</FollowBotton>
      </div>

      <div>
        <ImageWrapper
          src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          alt="user profile"
        />
        <div className="username">
          <p>Jenny Tamang </p>
        </div>
        <FollowBotton type="submit">Follow</FollowBotton>
      </div>
      <div>
        <ImageWrapper
          src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          alt="user profile"
        />
        <div className="username">
          <p>Suniti Sainju</p>
        </div>
        <FollowBotton type="submit">Follow</FollowBotton>
      </div>
      <div>
        <ImageWrapper
          src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          alt="user profile"
        />
        <div className="username">
          <p>Oshan Shrestha</p>
        </div>
        <FollowBotton type="submit">Follow</FollowBotton>
      </div>
      <div>
        <ImageWrapper
          src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          alt="user profile"
        />
        <div className="username">
          <p>Diya Manandhar</p>
        </div>
        <FollowBotton type="submit">Follow</FollowBotton>
      </div>
    </ListWrapper>
  );
};

export default UserList;
