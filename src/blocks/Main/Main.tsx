import { About } from '../About/About';
import { WelcomeSection } from '../WelcomeSection/WelcomeSection';

export const Main = (params) => {
  return (
    <main>
      <WelcomeSection />
      <About />
    </main>
  );
};
