import React from "react";
import styled from "styled-components";
import Like from "./../images/like.jpg";
import Comment from "./../images/comment.jpg";
import Share from "./../images/share.jpg";
import CommentSection from "components/Comment";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  margin-top: 20px;

  background-color: #d3d0d0;
  border-radius: 15px;
  box-shadow: 0 5px 7px lightgrey;
  width: 100%;
  height: 100%;
`;
const ImageWrapper = styled.img`
  display: flex;
  flex-direction: column;
  max-width: 50px;

  margin: 10px;
`;
const PostTopInfo = styled.div`
  margin: 0 10px;
  display: flex;
  position: relative;

  .username {
    font-size: 18px;
    font-weight: bold;
  }
`;
const PostBotton = styled.div`
  p {
    margin: 10px;
    font-size: 18px;
  }
`;
const Image = styled.img`
  /* margin-right: 10px;
  margin-left: 10px; */
  width: 100%;
`;
const PostOption = styled.div`
  padding-top: 10px;
  border-top: 2px solid whitesmoke;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
`;
const Botton = styled.div``;
const Img = styled.img`
  width: 30px;
  padding: 10px 70px;

  :hover {
    background-color: whitesmoke;
    border-radius: 10px;
  }
`;

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <PostWrapper>
      <div className="post">
        <PostTopInfo>
          <ImageWrapper src={profilePic} alt="ProfilePic" />

          <div className="top_info">
            <p className="username">{username}</p>
            <p>{timestamp}Timestamp</p>
          </div>
        </PostTopInfo>
        <PostBotton>
          <div className="postbtn">
            <p>{message}</p>
          </div>
          <div className="postImg">
            <Image src={image} alt="" />
          </div>
        </PostBotton>
      </div>
      <PostOption>
        <div className="post_option">
          <Botton>
            <div className="like">
              <Img src={Like} alt="" />
              <Img src={Comment} alt="" />
              <Img src={Share} alt="" />
            </div>
          </Botton>
        </div>
      </PostOption>
      <div>
        <CommentSection
          profilePic="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          comment="let's help eachother during this pandemic!!!"
        />
      </div>
    </PostWrapper>
  );
};

export default Post;
