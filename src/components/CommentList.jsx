import React from "react";
import styled from "styled-components";

const CommentWrapper = styled.div`
  max-width: 750px;
  width: 50%;
  border-bottom: 1px solid white;
  margin: 0 auto;
`;
const Img = styled.img`
  margin: 5px 0 0 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const CommentTop = styled.div`
  display: flex;
  flex-direction: row;
`;
const CommentBottom = styled.div``;
const HeaderContainer = styled.h3`
  margin-bottom: 0;
`;
const Date = styled.p`
  margin: 0;
  color: grey;
`;

const CommentList = ({ profilePic, username, timestamp, message }) => {
  return (
    <CommentWrapper>
      <div>
        <CommentTop>
          <Img src={profilePic} alt="PP" />
          <Info>
            <HeaderContainer>{username}</HeaderContainer>
            <Date>{timestamp} </Date>
          </Info>
        </CommentTop>
        <CommentBottom>{message}</CommentBottom>
      </div>
    </CommentWrapper>
  );
};

export default CommentList;
