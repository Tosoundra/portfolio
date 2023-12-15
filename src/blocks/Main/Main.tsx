import { Section } from '../../components/Section/Section';
import { About } from '../About/About';
import { DevelopeStack } from '../DevelopeStack/DevelopeStack';
import { WelcomeSection } from '../WelcomeSection/WelcomeSection';

export const Main = () => {
  return (
    <main>
      <WelcomeSection />
      <Section title="О себе">
        <About />
      </Section>
      <Section title="Мой стек разработки">
        <DevelopeStack />
      </Section>
    </main>
  );
};
