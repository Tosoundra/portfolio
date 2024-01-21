import { FC, memo } from 'react';
import {
  ProfileInnerComponentStyled,
  ProfileSkeletonStyled,
} from '../../../styledComponents/SkeletonStyled/ProfileSkeletonStyled/ProfileSkeletonStyled';

export const ProfileSkeleton: FC = memo(() => {
  return (
    <ProfileSkeletonStyled $direction="column" $gap="10px">
      <ProfileInnerComponentStyled />
      <ProfileInnerComponentStyled />
      <ProfileInnerComponentStyled />
      <ProfileInnerComponentStyled />
    </ProfileSkeletonStyled>
  );
});
