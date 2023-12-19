import { FC } from 'react';
import { ProjectLogoStyled, ProjectStyled, TitleComponent } from './ProjectStyled';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  image: string;
  link: string;
}

export const Project: FC<Props> = ({ title, image, link }) => {
  return (
    <Link to={link} type="button" target="_blank">
      <ProjectStyled direction="row">
        <TitleComponent>{title}</TitleComponent>
        <ProjectLogoStyled src={image} width={50} height={50} alt="project logo" />
      </ProjectStyled>
    </Link>
  );
};
