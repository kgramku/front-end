import React from "react";
import styled from "styled-components";
import Post from "components/Post";

const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  background-color: #bebebe;
  border-radius: 15px;
  box-shadow: 0px 5px 7px lightgray;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const ProfileImage = styled.div`
  flex: 1 1 120px;

  img {
    width: 100%;
  }
`;
const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ProfileInfo = styled.div``;
const ProfileMeta = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ProfileHeader = styled.div`
  max-width: 700px;
  margin: auto;
  background-color: #bebebe;
  border-radius: 15px;
  box-shadow: 0px 5px 7px lightgray;
  width: 100%;
  height: 100%;

  .profile {
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
  }
  .header {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  form {
    flex: 1;
    position: relative;
  }

  .username {
    /* margin: 10px 0; */
    font-weight: bold;
    font-size: 18px;
  }
`;
const ImageWrapper = styled.img`
  /* display: flex; */
  /* justify-content: space-evenly; */
  max-width: 100px;

  margin: 10px;
`;
const MidHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  border-bottom: 2px solid whitesmoke;
`;
const PostInfo = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  background-color: #bebebe;
  border-radius: 15px;
  box-shadow: 0px 5px 7px lightgray;
`;

const Photos = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 0;

  background-color: #bebebe;
  /* border-radius: 5px; */
  /* border: 1.5px solid whitesmoke; */
  box-shadow: 0px 5px 7px lightgray;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  p {
    font-weight: bold;
    font-size: 18px;
  }
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  padding: 10px;
  justify-content: space-between;

  p {
    font-weight: bold;
    font-size: 18px;
  }
`;

const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  p {
    font-weight: bold;
    font-size: 18px;
  }
`;

const Profile = ({ username }) => {
  return (
    <div className="ProfileHeader">
      <ProfileHeader>
        <div className="profile">
          <ImageWrapper
            src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
            alt="Pp"
          />
          <div className="header">
            <p className="username">{username} Diya Manandhar</p>

            <p>Edit Profile</p>
            <p>Setting</p>
          </div>
          <MidHeader>
            <div className="post">
              <h5>Posts</h5>
              <h5>Followers</h5>
              <h5>Following</h5>
            </div>
          </MidHeader>
        </div>
      </ProfileHeader>
      <PostInfo>
        <Photos>
          <p>Photos</p>
          <div className="image">
            <Image
              src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07"
              alt="user's added photo"
            />
            <Image
              src="https://images.pexels.com/photos/7803857/pexels-photo-7803857.jpeg"
              alt="user's added photo"
            />
            <Image
              src="https://images.pexels.com/photos/7524474/pexels-photo-7524474.jpeg"
              alt="user's added photo"
            />
            <Image
              src="https://images.pexels.com/photos/7574923/pexels-photo-7574923.jpeg"
              alt="user's added photo"
            />
            <Image
              src="https://images.pexels.com/photos/3693914/pexels-photo-3693914.jpeg"
              alt="user's added photo"
            />
          </div>
        </Photos>
        <PostDetail>
          <p>Posts</p>
          <Post
            profilePic="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
            message="Wear Mask, Stay Safe"
            // timestamp="This is timestamp"
            username="Diya Manandhar"
            image="https://media.istockphoto.com/vectors/novel-coronavirus-people-in-white-medical-face-mask-concept-of-vector-id1202707966?k=6&m=1202707966&s=612x612&w=0&h=8GsjwoTtiANnD2WMlLUJNiIg65kO4nPVyQCPqcXUMvo="
          />
          <Post
            profilePic="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
            message="This is to inform that the online class is further halted till May 21, 2021"
            // timestamp="This is timestamp"
            username="Diya Manandhar"
          />
        </PostDetail>
      </PostInfo>
    </div>
  );
};

export default Profile;
