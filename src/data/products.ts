export interface Product {
  id: string;
  slug: string;
  name: string;
  typeKey: string;
  shortName: string;
  price: number;
  descriptionKeys: string[];
  scentDescriptionKey: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: 'bianco',
    slug: 'bianco-white-vermouth',
    name: 'BIANCO',
    typeKey: 'productsDetail.bianco.type',
    shortName: 'Bianco',
    price: 75,
    descriptionKeys: ['productsDetail.bianco.description1'],
    scentDescriptionKey: 'productsDetail.bianco.scentDescription',
    images: [
      '/images/ProductDetailPage/bianco/bianco-1.webp',
      '/images/ProductDetailPage/bianco/bianco-2.webp',
      '/images/ProductDetailPage/bianco/bianco-3.webp',
      '/images/ProductDetailPage/bianco/bianco-4.webp',
      '/images/ProductDetailPage/bianco/bianco-5.webp',
    ],
  },
  {
    id: 'rosso',
    slug: 'rosso-red-vermouth',
    name: 'ROSSO',
    typeKey: 'productsDetail.rosso.type',
    shortName: 'Rosso',
    price: 75,
    descriptionKeys: ['productsDetail.rosso.description1', 'productsDetail.rosso.description2'],
    scentDescriptionKey: 'productsDetail.rosso.scentDescription',
    images: [
      '/images/ProductDetailPage/rosso/rosso-1.webp',
      '/images/ProductDetailPage/rosso/rosso-2.webp',
      '/images/ProductDetailPage/rosso/rosso-3.webp',
      '/images/ProductDetailPage/rosso/rosso-4.webp',
    ],
  },
];
