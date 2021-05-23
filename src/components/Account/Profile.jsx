import React from "react";
import styled from "styled-components";
import Post from "components/Post";
import Carousel from "react-elastic-carousel";
import ImageSlider from "components/Account/ImageSlider";
import { SliderData } from "./../../components/Account/SliderData";

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
  gap: 30px;
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

  background-color: #bebebe;
  border-radius: 15px;
  box-shadow: 0px 5px 7px lightgray;
  h3 {
    text-align: center;
    padding: 10px 0;
  }
`;

const Photos = styled.div`
  width: 100%;
  margin: 10px 0;

  background-color: #d3d0d0;
  border-radius: 15px;
  padding: 15px 0;
  box-shadow: 0px 5px 7px lightgray;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
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
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

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
          <Carousel breakPoints={breakPoints}>
            <div className="image">
              {/* <ImageSlider slides={SliderData} /> */}
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
              <Image
                src="https://cdn.pixabay.com/photo/2017/08/21/19/00/alone-2666433__340.jpg"
                alt="user's added photo"
              />
            </div>
          </Carousel>
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
