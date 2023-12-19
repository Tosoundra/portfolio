import { useNavigate } from 'react-router-dom';
import { LogoStyled } from './LogoStyled';
import { FC } from 'react';

export const Logo: FC = () => {
  const navigate = useNavigate();

  const logoButtonClickHandle = () => {
    navigate('/portfolio');
  };
  return <LogoStyled onClick={logoButtonClickHandle}></LogoStyled>;
};
