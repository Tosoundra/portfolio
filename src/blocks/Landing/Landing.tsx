import { Section } from '../../components/Section/Section';
import { About } from '../About/About';
import { DevelopmentStack } from '../DevelopmentStack/DevelopmentStack';
import { WelcomeSection } from '../WelcomeSection/WelcomeSection';

export const Landing = () => {
  return (
    <main>
      <WelcomeSection />
      <Section title="О себе">
        <About />
      </Section>
      <Section title="Стек разработки">
        <DevelopmentStack />
      </Section>
    </main>
  );
};
