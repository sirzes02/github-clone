import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StartIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className="username" to="/sirzes02">
          sirzes02
        </Link>

        <span>/</span>

        <Link className="reponame" to="/sirzes02/youtube-content">
          youtube-content
        </Link>
      </Breadcrumb>

      <p>Contains all of my Youtube lessons code.</p>

      <Stats>
        <li>
          <StartIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="https://github.com/sirzes02/simple-portafolio">
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
