import { FC } from 'react';
import { ProjectStyled, TitleComponent } from './ProjectStyled';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  image: string;
  link: string;
  positionY: string;
  activeCurrent: string;
  onClick: (title: string) => void;
}

export const Project: FC<Props> = ({ title, image, link, positionY, activeCurrent, onClick }) => {
  console.log(link);
  const onClickHandle = () => {
    if (activeCurrent === title) {
      onClick('');
    } else {
      onClick(title);
    }
  };

  return (
    <Link to={link} type="button" target="_blank">
      <ProjectStyled
        onClick={onClickHandle}
        image={image}
        positionY={positionY}
        isActive={activeCurrent === title}>
        <TitleComponent>{title}</TitleComponent>
        <img src={image} alt="img" width={50} height={50} />
      </ProjectStyled>
    </Link>
  );
};
