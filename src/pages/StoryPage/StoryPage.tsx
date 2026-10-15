import StoryBotanicals from '../../sections/StoryPageSections/StoryBotanicals/StoryBotanicals';
import StoryFinal from '../../sections/StoryPageSections/StoryFinal/StoryFinal';
import StoryGrapes from '../../sections/StoryPageSections/StoryGrapes/StoryGrapes';
import StoryHero from '../../sections/StoryPageSections/StoryHero/StoryHero';
import StoryRoses from '../../sections/StoryPageSections/StoryRoses/StoryRoses';

const StoryPage = () => {
  return (
    <main>
      <StoryHero />
      <StoryBotanicals />
      <StoryGrapes />
      <StoryRoses />
      <StoryFinal />
    </main>
  );
};

export default StoryPage;
