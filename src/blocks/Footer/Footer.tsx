import { Link } from 'react-router-dom';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { FooterStyled } from './FooterStyled';
import { listOfMedia } from '../../assets/utils/listOfMedia/listOfMedia';
import { FC } from 'react';

const date = new Date().getFullYear();

export const Footer: FC = () => {
  return (
    <FooterStyled>
      <FlexComponent direction="row">
        <span>&#169; {date}</span>
        <FlexComponent direction="row" gap="5px">
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
};
