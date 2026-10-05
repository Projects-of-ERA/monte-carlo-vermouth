import Botanicals from '../../sections/HomePageSections/Botanicals/Botanicals';
import Craftsmanship from '../../sections/HomePageSections/Craftsmanship/Craftsmanship';
import Hero from '../../sections/HomePageSections/Hero/Hero';
import Mixology from '../../sections/HomePageSections/Mixology/Mixology';
import Spirit from '../../sections/HomePageSections/Spirit/Spirit';
import Varietals from '../../sections/HomePageSections/Varietals/Varietals';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Spirit />
      <Botanicals />
      <Varietals />
      <Craftsmanship />
      <Mixology />
    </main>
  );
};

export default HomePage;
