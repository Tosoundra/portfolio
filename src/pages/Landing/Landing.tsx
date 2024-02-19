import { DevelopmentStack } from '../../blocks/DevelopmentStack/DevelopmentStack';
import { WelcomeSection } from '../../blocks/WelcomeSection/WelcomeSection';
import { Projects } from '../../components/Projects/Projects';
import { Section } from '../../components/Section/Section';
import { AboutMe } from '../../components/User/AboutMe';

export const Landing = () => {
  return (
    <main>
      <WelcomeSection />
      <Section title="Мои работы">
        <Projects />
      </Section>
      <Section title="Обо мне">
        <AboutMe />
      </Section>
      <Section title="Стек разработки">
        <DevelopmentStack />
      </Section>
    </main>
  );
};
