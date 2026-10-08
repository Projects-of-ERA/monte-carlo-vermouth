export type LocationItem = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone?: string;
  lat: number;
  lng: number;
  googleMapsUrl?: string;
};

export const locations: LocationItem[] = [
  {
    id: 'beefbar-monaco',
    name: 'Beefbar Monaco',
    address: '42 Quai Jean-Charles Rey,',
    city: '98000 Monaco',
    phone: '+377 97 77 09 29',
    lat: 43.72785,
    lng: 7.421586,
    googleMapsUrl:
      'https://www.google.com/maps/place/Beefbar+Monaco/@43.7275453,7.421934,15z/data=!4m2!3m1!1s0x0:0xdd296c3f64a3cff5',
  },
  {
    id: 'wine-palace-monte-carlo',
    name: 'Wine Palace Monte-Carlo',
    address: 'Yacht Club de Monaco, Quai Louis II,',
    city: '98000 Monaco',
    phone: '+377 97 77 05 05',
    lat: 43.7373061,
    lng: 7.4269751,
    googleMapsUrl:
      'https://www.google.com/maps/place/Wine+Palace+Monte-Carlo/@43.7373048,7.4248094,17z/data=!3m1!5s0x12cdc2889e700c6f:0x2f7dbab512e731!4m14!1m7!3m6!1s0x12cdc2857f4ab319:0x793a699c9da3f687!2sMonaco+Yacht+Club!8m2!3d43.7373048!4d7.4273843!16s%2Fg%2F1td81cs8!3m5!1s0x12cdc2889e0defd1:0x3daf39a70a392dbb!8m2!3d43.7373061!4d7.4269751!16s%2Fg%2F11csq9mn3p?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'yacht-club-monaco',
    name: 'Yacht Club de Monaco',
    address: 'Quai Louis II,',
    city: '98000 Monaco',
    phone: '+377 93 10 63 00',
    lat: 43.7373048,
    lng: 7.4273843,
    googleMapsUrl:
      'https://www.google.com/maps/place/Monaco+Yacht+Club/@43.7373048,7.4248094,17z/data=!3m1!4b1!4m6!3m5!1s0x12cdc2857f4ab319:0x793a699c9da3f687!8m2!3d43.7373048!4d7.4273843!16s%2Fg%2F1td81cs8?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'casino-de-monte-carlo',
    name: 'Casino de Monte-Carlo',
    address: 'Place du Casino,',
    city: '98000 Monaco',
    phone: '+377 98 06 21 21',
    lat: 43.7390972,
    lng: 7.4280681,
    googleMapsUrl:
      'https://www.google.com/maps/place/%D0%9A%D0%B0%D0%B7%D0%B8%D0%BD%D0%BE+%D0%9C%D0%BE%D0%BD%D1%82%D0%B5-%D0%9A%D0%B0%D1%80%D0%BB%D0%BE/@43.739285,7.4272277,18z/data=!3m2!4b1!5s0x12cdc28807f7d0fd:0xd6cc6bcaf84bd69f!4m6!3m5!1s0x12cdc287e46e0265:0xa66ee70c598cf4e3!8m2!3d43.7390972!4d7.4280681!16s%2Fm%2F03cwzft?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'buddha-bar-monte-carlo',
    name: 'Buddha-Bar Monte-Carlo',
    address: 'Place du Casino,',
    city: '98000 Monaco',
    phone: '+377 98 06 19 19',
    lat: 43.7399131,
    lng: 7.4291073,
    googleMapsUrl:
      'https://www.google.com/maps/place/Buddha-Bar+Monte-Carlo/@43.7399131,7.4291073,17z/data=!3m1!4b1!4m6!3m5!1s0x12cdc287df80d623:0x7a372485c904e418!8m2!3d43.7399131!4d7.4291073!16s%2Fg%2F1vb67m3l?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'song-qi',
    name: 'Song Qi',
    address: '7 Avenue Princesse Grace,',
    city: '98000 Monaco',
    phone: '+377 99 99 33 33',
    lat: 43.7430871,
    lng: 7.4304016,
    googleMapsUrl:
      'https://www.google.com/maps/place/Song+Qi/@43.7430871,7.4278267,17z/data=!3m1!4b1!4m6!3m5!1s0x12cdc27c530cb0c1:0x4aae75c892c2d3b9!8m2!3d43.7430871!4d7.4304016!16s%2Fg%2F1q62hzq2v?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'coya-monte-carlo',
    name: 'COYA Monte-Carlo',
    address: '26 Avenue Princesse Grace,',
    city: '98000 Monaco',
    phone: '+377 98 06 20 20',
    lat: 43.7467613,
    lng: 7.438426,
    googleMapsUrl:
      'https://www.google.com/maps/place/COYA+Monte-Carlo/@43.7467613,7.438426,17z/data=!3m1!4b1!4m6!3m5!1s0x12cde93c96699329:0x39a1d7519502c0ec!8m2!3d43.7467613!4d7.438426!16s%2Fg%2F11hdh4f5vc?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'la-vigie-zanoni',
    name: 'La Vigie Zanoni Monte-Carlo',
    address: 'Avenue Princesse Grace, Hôtel Monte-Carlo,',
    city: '06190 Roquebrune-Cap-Martin',
    phone: '+377 98 06 52 52',
    lat: 43.7499569,
    lng: 7.444557,
    googleMapsUrl:
      'https://www.google.com/maps/place/La+Vigie+Zanoni+Monte-Carlo/@43.7499569,7.4419821,17z/data=!3m1!4b1!4m6!3m5!1s0x12cde9da1131a577:0xb7217250862144b5!8m2!3d43.7499569!4d7.444557!16s%2Fg%2F1thr4cl8?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
  },
];
