import Varietals from '../../sections/HomePageSections/Varietals/Varietals';
import VermouthBottle from '../../sections/VermouthPageSections/VermouthBottle/VermouthBottle';
import VermouthCulture from '../../sections/VermouthPageSections/VermouthCulture/VermouthCulture';
import VermouthHero from '../../sections/VermouthPageSections/VermouthHero/VermouthHero';
import VermouthTasting from '../../sections/VermouthPageSections/VermouthTasting/VermouthTasting';

const VermouthPage = () => {
  return (
    <main>
      <VermouthHero />
      <VermouthCulture />
      <VermouthTasting />
      <VermouthBottle />
      <Varietals />
    </main>
  );
};

export default VermouthPage;
