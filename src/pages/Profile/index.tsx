import React from "react";
import { Container, Main, LeftSide, RightSide, Repos } from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

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
        <RightSide>
          <Repos>
            <h2>Random Reports</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username="Sirzes02"
                  reponame="youtube-content"
                  description="Contiene todos los tutoriales de youtube"
                  language={n % 3 === 0 ? "javascript" : "Typescript"}
                  starts={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
