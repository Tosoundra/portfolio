import { FC, useState } from 'react';
import { ListOfProjects } from '../../constants/ListOfProjects/ListOfProjects';
import { ListStyledComponent } from '../../styledComponents/ListStyledComponent/ListStyledComponent';
import { Project } from '../Project/Project';

export const Projects: FC = () => {
  const [currentOpenProject, setCurrentOpenProject] = useState('');
  return (
    <ListStyledComponent as="ul" id="projects">
      {ListOfProjects.map((item, index) => (
        <li key={index}>
          <Project
            title={item.title}
            image={item.image}
            link={item.link}
            description={item.description}
            isOpen={currentOpenProject === item.title}
            setCurrentOpenProject={setCurrentOpenProject}
          />
        </li>
      ))}
    </ListStyledComponent>
  );
};
