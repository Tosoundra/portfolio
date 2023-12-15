import { useState } from 'react';
import { ListOfProjects } from '../../../assets/utils/ListOfProjects/ListOfProjects';
import { ListStyledComponent } from '../../../styledComponents/ListStyledComponent/ListStyledComponent';
import { WrapperDescription } from '../../../styledComponents/Wrapper/Wrapper';
import { Project } from '../../Project/Project';
import { DescriptionComponents } from '../../../styledComponents/FontComponents/FontComponents';

export const Projects = () => {
  const [activeCurrent, setActiveCurrent] = useState('');

  const buttonClickHandle = (title: string): void => {
    setActiveCurrent(title);
  };

  return (
    <WrapperDescription as="div" margin="101px">
      <DescriptionComponents size="18px" opacity={0.5}>
        Мои работы
      </DescriptionComponents>

      <ListStyledComponent>
        {ListOfProjects.map((item, index) => (
          <Project
            title={item.title}
            image={item.image}
            link={item.link}
            positionY={item.positionY}
            key={index}
            activeCurrent={activeCurrent}
            onClick={buttonClickHandle}
          />
        ))}
      </ListStyledComponent>
    </WrapperDescription>
  );
};
