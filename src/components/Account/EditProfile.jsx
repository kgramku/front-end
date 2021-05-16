import React from "react";

const FormWrapper = styled.div``;
const ImageWrapper = styled.img``;
const UpdateChange = styled.div``;

const EditProfile = () => {
  return (
    <FormWrapper>
      <div className="EditProfile">
        <ImageWrapper
          src="https://media.istockphoto.com/vectors/woman-in-a-surgical-mask-vector-id1212979124?s=612x612"
          alt="ProfilePic"
        />
        <label>
          <div className="changeProfile">
            <input type="file" />
            Choose a Profile Pic
          </div>
        </label>
        <UpdateChange>
            <label>Username</label>
            <input type="text" value={username}
            onChange={}/>
            <label>Email</label>
            <input type ="text" value ={email} onChange={} />
        </UpdateChange>
      </div>
    </FormWrapper>
  );
};

export default EditProfile;
