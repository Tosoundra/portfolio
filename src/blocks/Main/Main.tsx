import { Section } from '../../components/Section/Section';
import { About } from '../About/About';
import { DevelopmentStack } from '../DevelopmentStack/DevelopmentStack';

import { WelcomeSection } from '../WelcomeSection/WelcomeSection';

export const Main = () => {
  return (
    <main>
      <WelcomeSection />
      <Section title="О себе">
        <About />
      </Section>
      <Section title="Стек разработки" color="#F5F5F5">
        <DevelopmentStack />
      </Section>
    </main>
  );
};
