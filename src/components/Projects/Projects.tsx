import { ListOfProjects } from '../../assets/utils/ListOfProjects/ListOfProjects';
import { ListStyledComponent } from '../../styledComponents/ListStyledComponent/ListStyledComponent';
import { WrapperDescription } from '../../styledComponents/Wrapper/Wrapper';
import { Project } from '../Project/Project';
import { DescriptionTextComponent } from '../../styledComponents/FontComponents/FontComponents';

export const Projects = () => {
  return (
    <WrapperDescription as="div" margin="101px">
      <DescriptionTextComponent size="18px" opacity={0.5}>
        Мои работы
      </DescriptionTextComponent>

      <ListStyledComponent>
        {ListOfProjects.map((item, index) => (
          <Project title={item.title} image={item.image} link={item.link} key={index} />
        ))}
      </ListStyledComponent>
    </WrapperDescription>
  );
};
