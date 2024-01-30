import { technologies } from '../../assets/utils/technologies/technologies';
import { TechnologyCard } from '../../components/TechnologyCard/TechnologyCard';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { DescriptionText, TitleText } from '../../styledComponents/FontComponents/FontComponents';
import {
  DevelopmentStackStyled,
  ImageTechnology,
  ListOfTechnologiesStyled,
} from './DevelopmentStackStyled';

export const DevelopmentStack = () => {
  return (
    <DevelopmentStackStyled as="article" $direction="column">
      <FlexComponent $direction="column" $gap="26px">
        <TitleText as="h2" $size="50px">
          Мой Стек технологий
        </TitleText>
        <DescriptionText $size="14px">
          В текущий момент мой стек разработки состоит из нескольких технологий.
        </DescriptionText>
      </FlexComponent>
      <ListOfTechnologiesStyled as="ul" $direction="row">
        {technologies.map((item, index) => (
          <TechnologyCard link={item.image} description={item.description} key={index} />
        ))}
      </ListOfTechnologiesStyled>
    </DevelopmentStackStyled>
  );
};
