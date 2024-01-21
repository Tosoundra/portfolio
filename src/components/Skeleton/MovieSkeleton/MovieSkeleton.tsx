import { FC, memo } from 'react';
import { InnerComponentStyled } from '../../../styledComponents/SkeletonStyled/SkeletonStyled';
import { MovieSkeletonStyled } from '../../../styledComponents/SkeletonStyled/MovieSkeletonStyled/MovieSkeletonStyled';

export const MovieSkeleton: FC = memo(() => {
  return (
    <MovieSkeletonStyled as="li" $direction="column" $gap="10px">
      <InnerComponentStyled $height="151px" />
      <InnerComponentStyled />
      <InnerComponentStyled />
    </MovieSkeletonStyled>
  );
});
