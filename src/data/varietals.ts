export type VarietalItem = {
  id: string;
  name: string;
  type: string;
  image: string;
  alt: string;
};

export const varietals: VarietalItem[] = [
  {
    id: 'bianco',
    name: 'Bianco',
    type: 'white vermouth',
    image: '/images/HomePage/varietals/bianco.png',
    alt: 'Monte Carlo Bianco Vermouth',
  },
  {
    id: 'rosso',
    name: 'Rosso',
    type: 'red vermouth',
    image: '/images/HomePage/varietals/rosso.png',
    alt: 'Monte Carlo Rosso Vermouth',
  },
];
