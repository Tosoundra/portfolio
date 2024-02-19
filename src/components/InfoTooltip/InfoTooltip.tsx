import { FC } from 'react';
import { InfoTooltipStyled } from './InfoTooltipStyled';
import { useAppSelector } from '../../hooks/storeHooks/storeHooks';

export const InfoTooltip: FC = () => {
  const { isActive, message, isError } = useAppSelector((state) => state.infoTooltip);

  return (
    <InfoTooltipStyled $isActive={isActive} $isError={isError}>
      <output>{message}</output>
    </InfoTooltipStyled>
  );
};
