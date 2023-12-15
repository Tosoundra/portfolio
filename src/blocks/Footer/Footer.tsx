import { Link } from 'react-router-dom';
import { FlexComponents } from '../../styledComponents/FlexComponents/FlexComponents';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { FooterStyled } from './FooterStyled';

const date = new Date().getFullYear();

export const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <FlexComponents direction="row">
          <span>&#169; {date}</span>
          <div>
            <Link to="https://github.com/Tosoundra" target="_blank">
              Github
            </Link>
          </div>
        </FlexComponents>
      </Wrapper>
    </FooterStyled>
  );
};
