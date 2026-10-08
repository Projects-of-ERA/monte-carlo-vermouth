import Botanicals from '../../sections/HomePageSections/Botanicals/Botanicals';
import Craftsmanship from '../../sections/HomePageSections/Craftsmanship/Craftsmanship';
import Hero from '../../sections/HomePageSections/Hero/Hero';
import Instagram from '../../sections/HomePageSections/Instagram/Instagram';
import Locations from '../../sections/HomePageSections/Locations/Locations';
import Mixology from '../../sections/HomePageSections/Mixology/Mixology';
import News from '../../sections/HomePageSections/News/News';
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
      <News />
      <Instagram />
      <Locations />
    </main>
  );
};

export default HomePage;
