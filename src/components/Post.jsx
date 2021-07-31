import React, { useState } from "react";
import styled from "styled-components";
import Like from "./../images/like.jpg";
import Comment from "./../images/comment.jpg";
import Share from "./../images/share.jpg";
import ShowButton from "./../images/showbutton.jpg";
import Popup from "./Popup";
import CommentSection from "components/Comment";
import CommentList from "components/CommentList";

// import CommentSection from "components/Comment";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  margin-top: 20px;

  background-color: #a79078;
  border-radius: 15px;
  box-shadow: 0 5px 7px #bdb198;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const ImageWrapper = styled.img`
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  max-width: 50px;

  margin: 10px;
`;
const PostTopInfo = styled.div`
  margin: 0 10px;
  display: flex;

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

  @media (max-width: 600px) {
    width: 30px;
    padding: 5px 40px;
  }

  :hover {
    background-color: #9de4da;
    border-radius: 10px;
  }
`;
const Images = styled.img`
  margin: 40px 20px 30px 400px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media (max-width: 700px) {
    margin: 40px 20px 30px 250px;
    width: 20px;
  }

  @media (max-width: 650px) {
    margin: 40px 20px 30px 200px;
    width: 20px;
  }
  @media (max-width: 500px) {
    margin: 40px 20px 30px 200px;
    width: 20px;
  }
  @media (max-width: 400px) {
    margin: 40px 20px 30px 100px;
    width: 20px;
  }
  @media (max-width: 360px) {
    margin: 40px 20px 30px 80px;
    width: 20px;
  }

  :hover {
    background: #9de4da;
  }
`;

const CommentHeader = styled.div`
  border-top: 2px solid whitesmoke;

  form {
    flex: 1;
    display: flex;
  }
`;

// const ImageWrapper = styled.img`
const ImgWrap = styled.img`
  display: none;
  position: relative;
  width: 40px;
  margin: 10px;
`;
// const CommentSection = styled.div`
//   input {
//     outline-width: 0;
//     border: none;
//     padding: 5px 30px;
//     margin: 0 15px;
//     margin: 20px;
//     border-radius: 999px;
//     background-color: #9de4da;
//     width: 550px;
//     height: 20px;

//     @media only screen and (max-width: 600px) {
//       margin-left: 10px;
//     }
//   }

//   button {
//     display: none;
//   }
// `;

const Post = ({ profilePic, image, username, timestamp, message }) => {
  const [popup, setPopup] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setComment("");
  };

  const onClick = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };
  return (
    <PostWrapper>
      <div className="post">
        <PostTopInfo>
          <ImageWrapper src={profilePic} alt="ProfilePic" />

          <div className="top_info">
            <p className="username">{username}</p>
            <p>{timestamp}Timestamp</p>
          </div>
          <Images src={ShowButton} onClick={onClick} />
          {popup && <Popup />}
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
      <CommentSection />
      <CommentList
        profilePic="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
        username="Dia Manandhar"
        timestamp="26/07/2021"
        message="KU is hawa!!!!"
      />
      <CommentList
        profilePic="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
        username="jpt"
        timestamp="27/07/2021"
        message="KU gives nachainey tension!!!!"
      />
    </PostWrapper>
  );
};

export default Post;
