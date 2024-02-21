import React, { FC, SetStateAction, memo } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_UP_URL } from '../../constants/API/appURL';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import {
  ProjectDescription,
  ProjectLinkStyled,
  ProjectLogoStyled,
  ProjectStyled,
  ProjectTitle,
} from './ProjectStyled';

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
          <ProjectTitle>{title}</ProjectTitle>

          <Link to={link} target="_blank">
            <ProjectLogoStyled src={image} width={50} height={50} alt="project logo" />{' '}
          </Link>
        </FlexComponent>
        {paragraphs.map((paragraph, index) => (
          <li key={index}>
            <ProjectDescription $isOpen={isOpen}>{paragraph}</ProjectDescription>
            <br />
          </li>
        ))}

        {(title.includes('Портфолио') && (
          <ProjectLinkStyled to={SIGN_UP_URL}>Зарегистрироваться</ProjectLinkStyled>
        )) || (
          <ProjectLinkStyled to={link} target="_blank">
            Перейти
          </ProjectLinkStyled>
        )}
      </ProjectStyled>
    );
  },
);
