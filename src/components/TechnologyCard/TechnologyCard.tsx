import { FC, memo } from 'react';
import {
  ImageTechnology,
  TechnologyCardStyled,
  TechnologyDescriptionContainer,
} from './TechnologyCardStyled';
import { DescriptionText } from '../../styledComponents/FontComponents/FontComponents';

interface Props {
  description: string;
  link: string;
}

export const TechnologyCard: FC<Props> = memo(({ link, description }) => {
  return (
    <TechnologyCardStyled>
      <ImageTechnology src={link} width={90} height={60} alt="icon of technology" />
      <TechnologyDescriptionContainer>
        <DescriptionText $size="13px">{description}</DescriptionText>
      </TechnologyDescriptionContainer>
    </TechnologyCardStyled>
  );
});
