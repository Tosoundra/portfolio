import { FC, useEffect, useState } from 'react';
import { InfoTooltipStyled } from './InfoTooltipStyled';

interface Props {
  status: string;
  message: string;
}

export const InfoTooltip: FC<Props> = ({ status, message }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <InfoTooltipStyled isActive={isActive} isError={false}>
      <span>{status}</span>
      <output>{message}</output>
    </InfoTooltipStyled>
  );
};
