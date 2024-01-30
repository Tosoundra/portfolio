import htmlPic from '../../images/html.png';
import cssPic from '../../images/css.png';
import sassPic from '../../images/sass.png';
import stylecomp from '../../images/styled-components.svg';
import jsPic from '../../images/js.png';
import tsPic from '../../images/ts.png';
import reactPic from '../../images/react.png';
import expressPic from '../../images/express.png';
import mongoPic from '../../images/mongo.png';
import redux from '../../images/redux.svg';

export const technologies = [
  {
    name: 'HTML',
    image: htmlPic,
    description: 'Соблюдаю принцип семантической верстки.',
  },
  {
    name: 'CSS',
    image: cssPic,
    description: 'Верстаю сайты с учетом кросс-браузерности, адаптивности и доступности',
  },
  {
    name: 'SASS',
    image: sassPic,
    description: 'Разрабатывал проекты с использованием препроцессора SASS.',
  },
  {
    name: 'Styled-components',
    image: stylecomp,
    description: 'Стилизую компоненты с помощью библиотеки StyledComponents',
  },
  {
    name: 'JS',
    image: jsPic,
    description: 'Активно использую ФП, ООП в своих проектах.',
  },
  {
    name: 'TS',
    image: tsPic,
    description: 'Типизирую Javascript с помощью Typescript.',
  },
  {
    name: 'React',
    image: reactPic,
    description: 'Владею React portal, Memo, Lazy loading, Hooks',
  },
  {
    name: 'Redux',
    image: redux,
    description:
      'Использовал Redux для аутентификации пользователя, для добавления в список избранного и для много чего еще.',
  },
  {
    name: 'Express.js',
    image: expressPic,
    description: 'Разворачивал сервер для работы с Backend',
  },
  {
    name: 'mongoDB',
    image: mongoPic,
    description: 'Использовал базу данных для хранения списка пользователей и не только',
  },
];
