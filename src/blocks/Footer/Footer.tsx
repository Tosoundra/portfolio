import { Link } from 'react-router-dom';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { FooterMediaContainerStyled, FooterStyled } from './FooterStyled';
import { listOfMedia } from '../../constants/listOfMedia/listOfMedia';
import { FC, memo } from 'react';

const date = new Date().getFullYear();

export const Footer: FC = memo(() => {
  return (
    <FooterStyled as="footer">
      <FlexComponent>
        <span>&#169; {date}</span>
        <FooterMediaContainerStyled as="ul">
          {listOfMedia.map((item, index) => (
            <li key={index}>
              <Link to={item.link} target="_blank">
                <img src={item.image} width={25} height={25} alt="media icon" />
              </Link>
            </li>
          ))}
        </FooterMediaContainerStyled>
      </FlexComponent>
    </FooterStyled>
  );
});
