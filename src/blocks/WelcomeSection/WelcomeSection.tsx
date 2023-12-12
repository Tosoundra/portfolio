import styled from 'styled-components';
import background from '../../assets//images/landing-logo.svg';

const Section = styled.section`
  height: 100vh;

  background-image: url(${background});
  background-color: #073042;
  background-size: auto;
  background-position: right;
  background-repeat: no-repeat;
`;

export const WelcomeSection = () => {
  return (
    <Section>
      <h1>Здравствуйте, меня зовут Антон, и здесь Вы узнаете больше обо мне.</h1>
    </Section>
  );
};
