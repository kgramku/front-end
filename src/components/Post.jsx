import React, { useState } from "react";
import styled from "styled-components";
import Like from "./../images/like.jpg";
import Comment from "./../images/comment.jpg";
import Share from "./../images/share.jpg";
import ShowButton from "./../images/showbutton.jpg";
import Popup from "./Popup";
import CommentSection from "components/Comment";
// import CommentSection from "components/Comment";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  margin-top: 20px;

  background-color: #6ec6ba;
  border-radius: 15px;
  box-shadow: 0 5px 7px #b3fadb;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    width: 90%;
  }
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

  /* @media only screen and (max-width: 600px) {
    width: 1.5%;
  }

  @media only screen and (min-width: 600px) {
    width: 1%;
  }

  @media only screen and (min-width: 768px) {
    width: 3%;
  }
  @media only screen and (min-width: 768px) {
    width: 4%;
  }
  @media only screen and (min-width: 992px) {
    width: 5%;
  } */

  :hover {
    background-color: #9de4da;
    border-radius: 10px;
  }
`;
const Images = styled.img`
  margin: 40px 20px 30px 450px;
  width: 30px;
  height: 30px;
  cursor: pointer;

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
          {/* <Images src={ShowButton} onClick={onClick} />
          {popup && <Popup />} */}
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
        <CommentSection />
        {/* <CommentSection
          profilePic="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          comment="let's help eachother during this pandemic!!!"
        /> */}
        <CommentHeader>
          <div className="comment">
            <form>
              <ImgWrap src={profilePic} alt="ProfilePic" />

              {/* <CommentSection onSubmit={handleSubmit}>
                <input
                  placeholder="Write a comment"
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleSubmit} type="btnSubmit">
                  Hidden submit
                </button>
              </CommentSection> */}
            </form>
          </div>
        </CommentHeader>
      </div>
    </PostWrapper>
  );
};

export default Post;
