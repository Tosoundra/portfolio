import { technologies } from '../../assets/utils/technologies/technologies';
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
          <li key={index}>
            <ImageTechnology width={90} height={60} src={item.image} alt="Technology" />
          </li>
        ))}
      </ListOfTechnologiesStyled>
    </DevelopmentStackStyled>
  );
};
