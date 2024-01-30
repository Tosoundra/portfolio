import { Link } from 'react-router-dom';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { FooterStyled } from './FooterStyled';
import { listOfMedia } from '../../constants/listOfMedia/listOfMedia';
import { FC, memo } from 'react';

const date = new Date().getFullYear();

export const Footer: FC = memo(() => {
  return (
    <FooterStyled as="footer">
      <FlexComponent $direction="row">
        <span>&#169; {date}</span>
        <FlexComponent as="ul" $direction="row" $gap="15px">
          {listOfMedia.map((item, index) => (
            <li key={index}>
              <Link to={item.link} target="_blank">
                <img src={item.image} width={25} height={25} alt="media icon" />
              </Link>
            </li>
          ))}
        </FlexComponent>
      </FlexComponent>
    </FooterStyled>
  );
});
