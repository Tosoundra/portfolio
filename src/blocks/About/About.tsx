import { AboutMe } from '../../components/User/AboutMe';
import { Projects } from '../../components/Projects/Projects';
import { FC } from 'react';

export const About: FC = () => {
  return (
    <>
      <AboutMe />
      <Projects />
    </>
  );
};
