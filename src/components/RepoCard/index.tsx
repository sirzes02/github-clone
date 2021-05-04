import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  TopSide,
  RepoIcon,
  BotSide,
  StartIcon,
  ForkIcon,
} from "./styles";

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  starts: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  starts,
  forks,
}) => {
  const languagueClass = language ? language.toLowerCase() : "other";

  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>
      </TopSide>

      <BotSide>
        <ul>
          <li>
            <div className={`language ${languagueClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StartIcon />
            <span>{starts}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
};

export default RepoCard;
