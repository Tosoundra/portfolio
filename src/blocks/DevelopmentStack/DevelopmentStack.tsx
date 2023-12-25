import { technologies } from '../../assets/utils/technologies/technologies';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { DescriptionText, TitleText } from '../../styledComponents/FontComponents/FontComponents';
import { DevelopmentStackStyled, Technology } from './DevelopmentStackStyled';

export const DevelopmentStack = () => {
  return (
    <DevelopmentStackStyled as="article" margin="90px">
      <TitleText as="h2" size="50px">
        Мой Стек технологий
      </TitleText>
      <DescriptionText size="14px">
        В текущий момент мой стек разработки состоит из нескольких технологий.
      </DescriptionText>
      <FlexComponent as="ul" direction="row">
        {technologies.map((item, index) => (
          <Technology image={item.image} key={index}></Technology>
        ))}
      </FlexComponent>
    </DevelopmentStackStyled>
  );
};
