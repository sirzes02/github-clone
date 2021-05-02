import React from "react";
import { Container, Main, LeftSide, RightSide } from "./styles";
import ProfileData from "../../components/ProfileData";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username="sirzes02"
            name="Santiago Varela"
            avatarUrl="https://avatars.githubusercontent.com/u/33233964?v=4"
            followers={887}
            following={7}
            company="USC"
            location="Cali, Colombia"
            email="sirzes02@gmail.com"
            blog="sirzes02.com"
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
