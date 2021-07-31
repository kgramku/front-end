import React from "react";
import styled from "styled-components";
import Post from "components/Post";
// import Carousel from "react-elastic-carousel";
import Slider from "components/Account/ImageSlider";
import Comment from "components/Comment";
// import { SliderData } from "./../../components/Account/SliderData";

const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  background-color: #35a797;
  border-radius: 15px;
  box-shadow: 0px 5px 7px #b3fadb;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 10px;
`;
const ProfileImage = styled.div`
  flex: 1 1 120px;
  max-width: 120px;

  img {
    width: 100%;
  }
`;
const ProfileDetails = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ProfileInfo = styled.div``;
const ProfileMeta = styled.div`
  flex: 1 1 100%;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const ProfileMetaCard = styled.div``;

const PostInfo = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  background-color: #74655e;
  border-radius: 15px;
  box-shadow: 0px 5px 7px #b3fadb;

  h3 {
    text-align: center;
    padding: 10px 0;
  }
`;

const Photos = styled.div`
  width: 100%;
  margin: 10px 0;

  background-color: #6ec6ba;
  border-radius: 15px;
  padding: 15px 0;
  box-shadow: 0px 5px 7px #b3fadb;
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
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
  width: 100%;

  p {
    font-weight: bold;
    font-size: 18px;
  }
`;

const Profile = ({ username }) => {
  return (
    <div className="ProfileHeader">
      <ProfileWrapper>
        <ProfileImage>
          <img
            src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
            alt="user profile"
          />
        </ProfileImage>
        <ProfileDetails>
          <ProfileInfo>
            <h2>@dia.mdhr</h2>
          </ProfileInfo>
          <ProfileMeta>
            <ProfileMetaCard>
              <h4>Posts</h4>
              <p>12</p>
            </ProfileMetaCard>
            <ProfileMetaCard>
              <h4>Following</h4>
              <p>120</p>
            </ProfileMetaCard>
            <ProfileMetaCard>
              <h4>Followers</h4>
              <p>142</p>
            </ProfileMetaCard>
          </ProfileMeta>
        </ProfileDetails>
      </ProfileWrapper>
      <PostInfo>
        <h3>Photos</h3>
        <Photos>
          <div>
            <Slider />
          </div>
        </Photos>
        <PostDetail>
          <h3>Posts</h3>
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
