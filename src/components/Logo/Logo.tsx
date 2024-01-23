import { LogoStyled } from './LogoStyled';
import { useNavigate } from 'react-router-dom';
import { LANDING_URL } from '../../assets/utils/URLs/appURL';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoStyled
      onClick={() => {
        navigate(LANDING_URL);
      }}
      type="button"
    />
  );
};
