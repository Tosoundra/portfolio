import { Link } from 'react-router-dom';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { FooterStyled } from './FooterStyled';
import { listOfMedia } from '../../assets/utils/listOfMedia/listOfMedia';

const date = new Date().getFullYear();

export const Footer = () => {
  return (
    <FooterStyled>
      <FlexComponent direction="row">
        <span>&#169; {date}</span>
        <ul>
          {listOfMedia.map((item, index) => (
            <li key={index}>
              <Link to={item.link} target="_blank">
                <img src={item.image} width={25} height={25} alt="media icon" />
              </Link>
            </li>
          ))}
        </ul>
      </FlexComponent>
    </FooterStyled>
  );
};
