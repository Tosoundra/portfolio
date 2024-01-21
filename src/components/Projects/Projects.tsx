import { ListOfProjects } from '../../assets/utils/ListOfProjects/ListOfProjects';
import { ListStyledComponent } from '../../styledComponents/ListStyledComponent/ListStyledComponent';
import { Project } from '../Project/Project';
import { TransparentText } from '../../styledComponents/FontComponents/FontComponents';
import { ProjectsStyled } from './ProjectsStyled';
import { FC } from 'react';

export const Projects: FC = () => {
  return (
    <ProjectsStyled>
      <TransparentText $size="18px">Мои работы</TransparentText>

      <ListStyledComponent as="ul" $direction="column">
        {ListOfProjects.map((item, index) => (
          <Project title={item.title} image={item.image} link={item.link} key={index} />
        ))}
      </ListStyledComponent>
    </ProjectsStyled>
  );
};
