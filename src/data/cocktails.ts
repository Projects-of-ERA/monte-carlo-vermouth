export interface Cocktail {
  id: string;
  title: string;
  description: string;
  recipe: string[];
  method: string;
  image: string;
}

export const cocktails: Cocktail[] = [
  {
    id: 'pear-drop',
    title: 'Pear Drop',
    description:
      'A refreshing and elegant twist on the classic Vermouth & Tonic, the Pear Drop combines the rich flavor of Monte Carlo Rosso with the delicate essence of pear. The cocktail is for those who prefer sweeter drinks and is inspired by the famous British confectionery of the same name. The addition of Grand Marnier brings a subtle orange complexity, perfectly balanced with the crispness of dry tonic water. Ideal for a sophisticated afternoon refreshment or a relaxing evening treat.',
    recipe: [
      '6 cl Monte Carlo Vermouth Rosso',
      '1.5 cl Pear Eau de Vie',
      '0.75 cl Grand Marnier',
      'Schweppes Dry Tonic',
    ],
    method:
      'Pour all ingredients into an empty highball glass. Fill the glass with cubed ice and top with tonic water. Briefly mix the ingredients in the glass with a bar spoon. Garnish and serve.',
    image: '/images/MixologyPage/drinks/pear-drop.png',
  },

  {
    id: 'parlour-game',
    title: 'Parlour Game',
    description:
      'The Parlour Game is a delightful Vermouth Sour that plays with the flavours of the Caribbean. Combining Monte Carlo Vermouth Rosso with Plantation 5 year Barbados Rum and Crème de Cacao Blanc, this cocktail offers a tropical twist with a touch of chocolate indulgence. The citrus notes from orange and lime juices blend harmoniously, topped off with the spicy warmth of pimento bitters. A must-try for those who enjoy a zesty and adventurous cocktail experience.',
    recipe: [
      '6 cl Monte Carlo Vermouth Rosso',
      '0.75 cl Plantation 5 year Barbados Rum',
      '2.25 cl Crème de Cacao Blanc',
      '1.5 cl Orange Juice',
      '2.25 cl Lime Juice',
    ],
    method:
      'Add all ingredients to a cocktail shaker. Add cubed ice and shake vigorously until the cocktail is ice cold. Fine strain into a chilled sour glass and garnish with freshly grated nutmeg.',
    image: '/images/MixologyPage/drinks/parlour-game.png',
  },

  {
    id: 'cote-dazur-cobbler',
    title: 'Côte d’Azur Cobbler',
    description:
      'Playing off the rose notes of Monte Carlo Vermouth, this concoction is a new take on the classic sherry cobbler, adding apple and grapefruit to the mix for a brighter, more citrus experience.',
    recipe: [
      '6 cl Monte Carlo Bianco Vermouth',
      '2.2 cl Eddu Eau de Vie de Pomme',
      '1.5 cl Giffard Pamplemousse Rose Liqueur',
      '1.5 cl Rich Simple Syrup',
      '1.5 cl Fresh Lemon Juice',
    ],
    method:
      'Shake all ingredients with just one ice cube to mix them. Pour the cocktail into the glass and fill with pebble ice. Glassware: Rose Gold Julep Cup. Garnish: Add a straw and garnish with a mint plouche and a grapefruit slice.',
    image: '/images/MixologyPage/drinks/cote-dazur-cobbler.png',
  },

  {
    id: 'monte-carlo-spritz',
    title: 'Monte-Carlo Spritz',
    description:
      'This delightfully simple recipe tantalizes the palate, in an epiphany for the spritz lover. From whichever side of the marina you happen to be watching the sunset, the Monte-Carlo Spritz will anchor the moment into memory. The invigorating flavor of Monte-Carlo Vermouth is exalted by a splash of sumptuous prosecco, while the rose petal garnish hinting at its essence is delicately placed on the refreshing ice cube. A cocktail to discover and enjoy, at any time of the day.',
    recipe: ['16 cl Prosecco', '6 cl Vermouth', 'Rose petal garnish', '1 large ice cube'],
    method:
      'Stir all ingredients over ice in a mixing glass and strain into the glass. Glassware: Coupette. Garnish: Express a grapefruit peel over the top of the cocktail. Garnish with a fresh cherry.',
    image: '/images/MixologyPage/drinks/monte-carlo-spritz.png',
  },

  {
    id: 'cherry-blossom',
    title: 'Cherry Blossom',
    description:
      'She’s not as sweet as she looks. Inspired by the classic Adonis cocktail from 1884, one of the first low ABV cocktails to become widely popular, this recipe brings out the floral flavors of Monte-Carlo Vermouth with bright cherry and anise from the absinthe, while the Supasawa adds a bit of acidity to encourage the next sip. Delicate yet complex, ideal before a meal, with oysters and seafood, or outside on a hot summer’s day.',
    recipe: [
      '6 cl MonteCarlo Bianco Vermouth',
      '3 cl La Guita Manzanilla Sherry',
      '1 teaspoon Cherry Syrup',
      '0.5 teaspoon Supasawa',
      '2 dashes Pernod Absinthe',
    ],
    method:
      'Stir all ingredients over ice in a mixing glass and strain into the glass. Glassware: Coupette. Garnish: Express a grapefruit peel over the top of the cocktail. Garnish with a fresh cherry.',
    image: '/images/MixologyPage/drinks/cherry-blossom.png',
  },
];
