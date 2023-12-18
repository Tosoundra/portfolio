import { FC, ReactNode } from 'react';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { DescriptionContainer } from '../../styledComponents/DescriptionContainer/DescriptionContainer';
import { SectionNameTextComponent } from '../../styledComponents/FontComponents/FontComponents';

interface Props {
  children: ReactNode;
  title: string;
  color?: string;
}

export const Section: FC<Props> = ({ children, title, color }) => {
  return (
    <Wrapper color={color}>
      <DescriptionContainer>
        <SectionNameTextComponent>{title}</SectionNameTextComponent>
      </DescriptionContainer>
      {children}
    </Wrapper>
  );
};
