export interface Cocktail {
  id: string;
  title: string;
  descriptionKey: string;
  recipeKeys: string[];
  methodKey: string;
  image: string;
}

export const cocktails: Cocktail[] = [
  {
    id: 'pear-drop',
    title: 'Pear Drop',
    descriptionKey: 'mixologyDrinks.cocktails.pearDrop.description',
    recipeKeys: [
      'mixologyDrinks.cocktails.pearDrop.recipe.0',
      'mixologyDrinks.cocktails.pearDrop.recipe.1',
      'mixologyDrinks.cocktails.pearDrop.recipe.2',
      'mixologyDrinks.cocktails.pearDrop.recipe.3',
    ],
    methodKey: 'mixologyDrinks.cocktails.pearDrop.method',
    image: '/images/MixologyPage/drinks/pear-drop.png',
  },
  {
    id: 'parlour-game',
    title: 'Parlour Game',
    descriptionKey: 'mixologyDrinks.cocktails.parlourGame.description',
    recipeKeys: [
      'mixologyDrinks.cocktails.parlourGame.recipe.0',
      'mixologyDrinks.cocktails.parlourGame.recipe.1',
      'mixologyDrinks.cocktails.parlourGame.recipe.2',
      'mixologyDrinks.cocktails.parlourGame.recipe.3',
      'mixologyDrinks.cocktails.parlourGame.recipe.4',
    ],
    methodKey: 'mixologyDrinks.cocktails.parlourGame.method',
    image: '/images/MixologyPage/drinks/parlour-game.png',
  },
  {
    id: 'cote-dazur-cobbler',
    title: 'Côte d’Azur Cobbler',
    descriptionKey: 'mixologyDrinks.cocktails.coteDazurCobbler.description',
    recipeKeys: [
      'mixologyDrinks.cocktails.coteDazurCobbler.recipe.0',
      'mixologyDrinks.cocktails.coteDazurCobbler.recipe.1',
      'mixologyDrinks.cocktails.coteDazurCobbler.recipe.2',
      'mixologyDrinks.cocktails.coteDazurCobbler.recipe.3',
      'mixologyDrinks.cocktails.coteDazurCobbler.recipe.4',
    ],
    methodKey: 'mixologyDrinks.cocktails.coteDazurCobbler.method',
    image: '/images/MixologyPage/drinks/cote-dazur-cobbler.png',
  },
  {
    id: 'monte-carlo-spritz',
    title: 'Monte-Carlo Spritz',
    descriptionKey: 'mixologyDrinks.cocktails.monteCarloSpritz.description',
    recipeKeys: [
      'mixologyDrinks.cocktails.monteCarloSpritz.recipe.0',
      'mixologyDrinks.cocktails.monteCarloSpritz.recipe.1',
      'mixologyDrinks.cocktails.monteCarloSpritz.recipe.2',
      'mixologyDrinks.cocktails.monteCarloSpritz.recipe.3',
    ],
    methodKey: 'mixologyDrinks.cocktails.monteCarloSpritz.method',
    image: '/images/MixologyPage/drinks/monte-carlo-spritz.png',
  },
  {
    id: 'cherry-blossom',
    title: 'Cherry Blossom',
    descriptionKey: 'mixologyDrinks.cocktails.cherryBlossom.description',
    recipeKeys: [
      'mixologyDrinks.cocktails.cherryBlossom.recipe.0',
      'mixologyDrinks.cocktails.cherryBlossom.recipe.1',
      'mixologyDrinks.cocktails.cherryBlossom.recipe.2',
      'mixologyDrinks.cocktails.cherryBlossom.recipe.3',
      'mixologyDrinks.cocktails.cherryBlossom.recipe.4',
    ],
    methodKey: 'mixologyDrinks.cocktails.cherryBlossom.method',
    image: '/images/MixologyPage/drinks/cherry-blossom.png',
  },
];
