import { FC, ReactNode } from 'react';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { DescriptionContainer } from '../../styledComponents/DescriptionContainer/DescriptionContainer';
import { SectionNameText } from '../../styledComponents/FontComponents/FontComponents';

interface Props {
  children: ReactNode;
  title: string;
}

export const Section: FC<Props> = ({ children, title }) => {
  return (
    <Wrapper>
      <DescriptionContainer>
        <SectionNameText>{title}</SectionNameText>
      </DescriptionContainer>
      {children}
    </Wrapper>
  );
};
