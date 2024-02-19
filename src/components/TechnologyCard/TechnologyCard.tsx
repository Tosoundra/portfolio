import { FC, memo } from 'react';
import {
  ImageTechnology,
  TechnologyCardStyled,
  TechnologyDescriptionContainer,
} from './TechnologyCardStyled';

interface Props {
  description: string;
  link: string;
}

export const TechnologyCard: FC<Props> = memo(({ link, description }) => {
  return (
    <TechnologyCardStyled>
      <ImageTechnology src={link} width={90} height={60} alt="icon of technology" />
      <TechnologyDescriptionContainer>
        <span>{description}</span>
      </TechnologyDescriptionContainer>
    </TechnologyCardStyled>
  );
});
