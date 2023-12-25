import { SkeletonStyled } from './SkeletonStyled';

export const Skeleton = () => {
  return (
    <SkeletonStyled as="li" direction="column" gap="10px">
      <div></div>
      <div></div>
      <span></span>
    </SkeletonStyled>
  );
};
