import { TechnologyCard } from '../../components/TechnologyCard/TechnologyCard';
import { technologies } from '../../constants/technologies/technologies';
import { DevelopmentStackStyled, ListOfTechnologiesStyled } from './DevelopmentStackStyled';

export const DevelopmentStack = () => {
  return (
    <DevelopmentStackStyled as="article">
      <span>В данный момент я владею следующими инструментами.</span>
      <ListOfTechnologiesStyled as="ul">
        {technologies.map((item, index) => (
          <li key={index}>
            <TechnologyCard link={item.image} description={item.description} />
          </li>
        ))}
      </ListOfTechnologiesStyled>
    </DevelopmentStackStyled>
  );
};
