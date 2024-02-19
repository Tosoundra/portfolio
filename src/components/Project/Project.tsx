import React, { FC, SetStateAction, memo } from 'react';
import { Link } from 'react-router-dom';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ProjectDescription, ProjectLogoStyled, ProjectStyled, Title } from './ProjectStyled';

interface Props {
  title: string;
  image: string;
  link: string;
  description: string;
  isOpen: boolean;
  setCurrentOpenProject: React.Dispatch<SetStateAction<string>>;
}
export const Project: FC<Props> = memo(
  ({ description, image, isOpen, link, setCurrentOpenProject, title }) => {
    const paragraphs = description.split('\n');

    return (
      <ProjectStyled
        as="article"
        onClick={() => {
          setCurrentOpenProject(title);
          if (isOpen) {
            setCurrentOpenProject('');
          }
        }}
        $isOpen={isOpen}>
        <FlexComponent>
          <Title>{title}</Title>

          <Link to={link} type="button" target="_blank">
            <ProjectLogoStyled src={image} width={50} height={50} alt="project logo" />{' '}
          </Link>
        </FlexComponent>
        {paragraphs.map((paragraph, index) => (
          <li key={index}>
            <ProjectDescription $isOpen={isOpen}>{paragraph}</ProjectDescription>
            <br />
          </li>
        ))}
      </ProjectStyled>
    );
  },
);
