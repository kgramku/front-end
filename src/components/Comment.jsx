import React, { useState } from "react";
import styled from "styled-components";

const CommentHeader = styled.div`
  border-top: 2px solid whitesmoke;
  form {
    flex: 1;
    display: flex;
  }
`;

const ImageWrapper = styled.img`
  display: flex;
  position: relative;
  width: 40px;
  margin: 10px;
`;
const CommentSection = styled.div`
  input {
    outline-width: 0;
    border: none;
    padding: 5px 30px;
    margin: 0 15px;
    margin: 10px;
    border-radius: 999px;
    background-color: #eeecec;
    width: 550px;
  }

  button {
    display: none;
  }
`;

const Comment = (profilePic) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setComment("");
  };

  return (
    <CommentHeader>
      <div className="comment">
        <form>
          <ImageWrapper src={profilePic} alt="ProfilePic" />

          <CommentSection onSubmit={handleSubmit}>
            <input
              placeholder="Write a comment"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleSubmit} type="btnSubmit">
              Hidden submit
            </button>
          </CommentSection>
        </form>
      </div>
    </CommentHeader>
  );
};

export default Comment;
