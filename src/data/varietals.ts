export type VarietalItem = {
  id: string;
  slug: string;
  name: string;
  typeKey: string;
  image: string;
  alt: string;
};

export const varietals: VarietalItem[] = [
  {
    id: 'bianco',
    slug: 'bianco-white-vermouth',
    name: 'Bianco',
    typeKey: 'varietals.whiteVermouth',
    image: '/images/HomePage/varietals/bianco.png',
    alt: 'Monte Carlo Bianco Vermouth',
  },
  {
    id: 'rosso',
    slug: 'rosso-red-vermouth',
    name: 'Rosso',
    typeKey: 'varietals.redVermouth',
    image: '/images/HomePage/varietals/rosso.png',
    alt: 'Monte Carlo Rosso Vermouth',
  },
];
