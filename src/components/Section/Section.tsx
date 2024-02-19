import { FC, ReactNode } from 'react';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { DescriptionContainer } from '../../styledComponents/DescriptionContainer/DescriptionContainer';

interface Props {
  children: ReactNode;
  title: string;
}

export const Section: FC<Props> = ({ children, title }) => {
  return (
    <Wrapper>
      <DescriptionContainer>
        <span>{title}</span>
      </DescriptionContainer>
      {children}
    </Wrapper>
  );
};
