import Feed from "components/Feed";
import Post from "components/Post";
import styled from "styled-components";

const HomeWraapper = styled.div`
  width: 0 710px;
  margin: auto;
  width: 100%;
  align-items: center;
  /* background-color: grey; */
  border: 2px solid lightgrey;
  box-sizing: border-box;
`;

const HomeView = () => {
  return (
    <HomeWraapper>
      <div className="home">
        <Feed />
        <Post
          profilePic="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          message="Wear Mask, Stay Safe"
          // timestamp="This is timestamp"
          username="Diya Manandhar"
          image="https://media.istockphoto.com/vectors/novel-coronavirus-people-in-white-medical-face-mask-concept-of-vector-id1202707966?k=6&m=1202707966&s=612x612&w=0&h=8GsjwoTtiANnD2WMlLUJNiIg65kO4nPVyQCPqcXUMvo="
        />
        <Post
          profilePic="https://previews.123rf.com/images/sokolfly/sokolfly2004/sokolfly200400066/145760719-vector-illustration-of-woman-in-medical-face-mask-flat-person-portrait-avatar-design-female-head-ico.jpg"
          username="Suniti Sainju"
          message="Online class will be halted from May 7, 2021 until May 14, 2021 as per the admininstration."
        />
        <Post
          profilePic="https://cdn.nohat.cc/thumb/f/720/comrawpixel2310838.jpg"
          username="Jenny Tmg"
          image="https://image.freepik.com/free-vector/young-woman-with-face-mask-sick-coronavirus-covid-19_24877-62819.jpg"
        />
      </div>
    </HomeWraapper>
  );
};

export default HomeView;
