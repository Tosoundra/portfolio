import { FC } from 'react';
import { ButtonStyled } from './ButtonStyled';

interface Props {
  title: string;
  onClick: () => void;
  isLogged: boolean;
}

export const Button: FC<Props> = ({ title, onClick, isLogged, ...rest }) => {
  return (
    <ButtonStyled onClick={onClick} type="button" isLogged={isLogged} {...rest}>
      {title}
    </ButtonStyled>
  );
};
