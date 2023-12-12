import { Link } from 'react-router-dom';
import { FlexComponents } from '../../styledComponents/FlexComponents/FlexComponents';
import { PaddingWrapper } from '../../styledComponents/PaddingWrapper/PaddingWrapper';
import { FooterStyled } from './FooterStyled';

const date = new Date().getFullYear();

export const Footer = (params) => {
  return (
    <FooterStyled>
      <PaddingWrapper>
        <FlexComponents>
          <span>&#169; {date}</span>
          <div>
            <Link to="https://github.com/Tosoundra" target="_blank">
              Github
            </Link>
          </div>
        </FlexComponents>
      </PaddingWrapper>
    </FooterStyled>
  );
};
