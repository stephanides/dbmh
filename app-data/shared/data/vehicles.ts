export type Vehicle = {
  image: string;
  title: string;
  capacity: {
    sk: string;
    en: string;
  };
  slug: string;
  description: {
    sk: string;
    en: string;
  };
  equipment: {
    sk: string[];
    en: string[];
  };
  gallery: string[];
};

export const vehicles: Vehicle[] = [
  {
    title: 'Mercedes-Benz Vito Tourer',
    capacity: {
      sk: 'VIP MIKROBUS | 8 + vodič',
      en: 'VIP MIKROBUS | 8 + driver',
    },
    image: '/media/vehicles/mercedes_benz_vito_tourer.jpg',
    description: {
      sk: 'Funkčný a estetický interiér vozidla rozhodne nezaostáva za jeho nadčasovým dizajnom. Má všetko, čo od mestskej dodávky možno očakávať – polohovateľné sedadlá, klimatizáciu, audio systém, ale aj tónované sklá.',
      en: 'The functional and aesthetic interior of the vehicle certainly does not lag behind its timeless design. It has everything you would expect from a city van - reclining seats, air conditioning, an audio system, as well as tinted windows.',
    },
    slug: 'mercedes-benz-vito-tourer',
    equipment: {
      sk: [
        'polohovateľné sedadlá',
        'klimatizácia',
        'audio systém',
        'tónované sklá',
        'bezpečnostné pásy',
      ],
      en: [
        'reclining seats',
        'air condition',
        'audio system',
        'tinted windows',
        'seat belts',
      ],
    },
    gallery: [
      '/media/vehicles/mercedes-benz-vito-tourer/1.jpg',
      '/media/vehicles/mercedes-benz-vito-tourer/2.jpg',
      '/media/vehicles/mercedes-benz-vito-tourer/3.jpg',
      '/media/vehicles/mercedes-benz-vito-tourer/4.jpg',
    ],
  },
  {
    title: 'Mercedes Benz Sprinter',
    capacity: {
      sk: 'Luxusný MIKROBUS | 19 + 1 + vodič',
      en: 'Luxury MIKROBUS | 19 + 1 + driver',
    },
    image: '/media/vehicles/mercedes_benz_sprinter.jpg',
    description: {
      sk: 'Luxusný mikrobus, v ktorom si užijete ten najvyšší komfort. Autobus v sebe ukrýva polohovateľné kožené sedadlá, panoramatické okná, tónované sklá, kvalitný audio systém, TV s DVD prehrávačom a tiež náladové osvetlenie.',
      en: 'A luxury minibus that offers the highest comfort features reclining leather seats, panoramic windows, tinted windows, a high-quality audio system, a TV with a DVD player, and mood lighting to make the overall travel experience more pleasant.',
    },
    slug: 'mercedes-benz-sprinter',
    equipment: {
      sk: [
        'polohovateľné kožené sedadlá',
        'náladové osvetlenie',
        'panoramatické okná',
        'klimatizácia',
        'tónované sklá',
        'bezpečnostné pásy',
        'Rozhlasová aparatúra',
        'TV s DVD prehrávačom',
      ],
      en: [
        'reclining leather seats',
        'mood lighting',
        'panoramic windows',
        'air condition',
        'tinted windows',
        'seat belts',
        'high-quality audio system',
        'TV with a DVD player',
      ],
    },
    gallery: [
      '/media/vehicles/mercedes-benz-sprinter/1.jpg',
      '/media/vehicles/mercedes-benz-sprinter/2.jpg',
      '/media/vehicles/mercedes-benz-sprinter/3.jpg',
      '/media/vehicles/mercedes-benz-sprinter/4.jpg',
    ],
  },
  {
    title: 'SETRA S 515 HD',
    capacity: {
      sk: 'VIP autobus | 49+1+1+vodič',
      en: 'VIP bus | 49+1+1+driver',
    },
    image: '/media/vehicles/setra_s_515_hd.jpg',
    description: {
      sk: 'Kompaktný model autobusu ideálny na diaľkové linky a výlety. Disponuje audio a video systémom, polohovateľnými sedadlami, tónovanými sklami, klimatizáciou, toaletami, opierkami na nohy a bezpečnostnými pásmi.',
      en: 'Compact bus model ideal for long-distance or contract transport. It has an audio and video system, reclining seats, tinted windows, air conditioning, toilets, footrests, and seat belts.',
    },
    slug: 'setra-s-515-hd',
    equipment: {
      sk: [
        'polohovateľné sedadlá',
        'chladnička',
        'tónované sklá',
        'náladové osvetlenie',
        'rozhlasová aparatúra',
        'klimatizácia',
        'TV s DVD prehrávačom',
        'bezpečnostné pásy',
        'kávovar',
      ],
      en: [
        'reclining seats',
        'fridge',
        'tinted windows',
        'mood lighting',
        'audio and video system',
        'air condition',
        'TV with a DVD player',
        'seat belts',
        'coffee machine',
      ],
    },
    gallery: [
      '/media/vehicles/setra-s-515-hd/1.jpg',
      '/media/vehicles/setra-s-515-hd/2.jpg',
      '/media/vehicles/setra-s-515-hd/3.jpg',
      '/media/vehicles/setra-s-515-hd/4.jpg',
    ],
  },
  {
    title: 'Iveco Irisbus EVADYS H',
    capacity: {
      sk: 'Autobus pre zmluvnú prepravu | 53+vodič',
      en: 'Comfortable bus for a contract transport | 53+driver',
    },
    image: '/media/vehicles/iveco_irisbus_evadys_h.jpg',
    description: {
      sk: 'Komfortný a priestranný autobus je vhodný pre zmluvnú prepravu, regionálne a celoštátne linky, letiskovú prepravu a organizované zájazdy. V autobuse nájdete audio a video systém, polohovateľné sedadlá, opierky na nohy, tónované sklá, klimatizáciu a bezpečnostné pásy.',
      en: 'The spacious bus is suitable for regional and cross-country lines, airport transportation, organized tours, or excursions. The bus features an audio and video system, reclining seats, footrests, tinted windows, air conditioning, and seat belts.',
    },
    slug: 'iveco-irisbus-evadys-h',
    equipment: {
      sk: [
        'polohovateľné sedadlá',
        'chladnička',
        'tónované sklá',
        'náladové osvetlenie',
        'rozhlasová aparatúra',
        'klimatizácia',
        'TV s DVD prehrávačom',
        'bezpečnostné pásy',
        'kávovar',
      ],
      en: [
        'reclining seats',
        'fridge',
        'tinted windows',
        'mood lighting',
        'audio and video system',
        'air condition',
        'TV with a DVD player',
        'seat belts',
        'coffee machine',
      ],
    },
    gallery: [
      '/media/vehicles/iveco-irisbus-evadys-h/1.jpg',
      '/media/vehicles/iveco-irisbus-evadys-h/2.jpg',
      '/media/vehicles/iveco-irisbus-evadys-h/3.jpg',
      '/media/vehicles/iveco-irisbus-evadys-h/4.jpg',
    ],
  },
  {
    title: 'Mercedes-Benz Travego Star',
    capacity: {
      sk: 'Zájazdový autobus | 49+1+1+vodič',
      en: 'Tour bus | 49+1+1+driver',
    },
    image: '/media/vehicles/mercedes_benz_travego_star.jpg',
    description: {
      sk: 'Prepravné vozidlo, ktoré vám zaručí zážitok z jazdy. Autobus v sebe ukrýva audio a video systém, polohovateľné sedadlá, opierky na nohy, tónované sklá, klimatizáciu, toaletu, kávovar a bezpečnostné pásy.',
      en: 'A transport vehicle that guarantees you a driving adventure. The bus includes an audio and video system, reclining seats, footrests, tinted windows, air conditioning, a toilet, a coffee machine, and seat belts.',
    },
    slug: 'mercedes-benz-travego-star',
    equipment: {
      sk: [
        'polohovateľné sedadlá',
        'chladnička',
        'tónované sklá',
        'náladové osvetlenie',
        'toaleta',
        'klimatizácia',
        'rozhlasová aparatúra',
        'bezpečnostné pásy',
        'TV s DVD prehrávačom',
      ],
      en: [
        'audio and video system',
        'fridge',
        'tinted windows',
        'mood lighting',
        'toilet',
        'air condition',
        'audio and video system',
        'seat belts',
        'TV with a DVD player',
      ],
    },
    gallery: [
      '/media/vehicles/mercedes-benz-travego-star/1.jpg',
      '/media/vehicles/mercedes-benz-travego-star/2.jpg',
      '/media/vehicles/mercedes-benz-travego-star/3.jpg',
      '/media/vehicles/mercedes-benz-travego-star/4.jpg',
    ],
  },
  {
    title: 'Mercedes-Benz Travego',
    capacity: {
      sk: 'Zájazdový autobus | 49+1+1+vodič',
      en: 'Tour bus | 49+1+1+driver',
    },
    image: '/media/vehicles/mercedes_benz_travego.jpg',
    description: {
      sk: 'Mimoriadne priestranné vozidlo s kapacitou nad 50 miest. Vo výbave autobusu sú polohovateľné sedadlá, tónované sklá, klimatizácia, toaleta. Nechýbajú ani opierky na nohy, audio a video systém a samozrejme, bezpečnostné pásy.',
      en: 'An extremely spacious vehicle with a capacity of over 50 seats. The bus is equipped with reclining seats, tinted windows, air conditioning, toilet. There are also footrests, an audio and video system, and, of course, seat belts.',
    },
    slug: 'mercedes-benz-travego',
    equipment: {
      sk: [
        'polohovateľné sedadlá',
        'kávovar',
        'panoramatická strecha',
        'chladnička',
        'tónované sklá',
        'náladové osvetlenie',
        'toaleta',
        'klimatizácia',
        'rozhlasová aparatúra',
        'bezpečnostné pásy',
        'TV s DVD prehrávačom',
      ],
      en: [
        'reclining seats',
        'coffee machine',
        'panoramic roof',
        'fridge',
        'tinted windows',
        'mood lighting',
        'toilet',
        'air condition',
        'audio and video system',
        'seat belts',
        'TV with a DVD player',
      ],
    },
    gallery: [
      '/media/vehicles/mercedes-benz-travego/1.jpg',
      '/media/vehicles/mercedes-benz-travego/2.jpg',
      '/media/vehicles/mercedes-benz-travego/3.jpg',
      '/media/vehicles/mercedes-benz-travego/4.jpg',
    ],
  },
  {
    title: 'Iveco Irisbus EVADYS H',
    capacity: {
      sk: 'Autobus pre zmluvnú prepravu | 53+vodič',
      en: 'Comfortable bus for a contract transport | 53+driver',
    },
    image: '/media/vehicles/iveco_irisbus_evadys_h_2.jpg',
    description: {
      sk: 'Komfortný a priestranný autobus je vhodný pre zmluvnú prepravu, regionálne a celoštátne linky, letiskovú prepravu a organizované zájazdy. V autobuse nájdete audio a video systém, polohovateľné sedadlá, opierky na nohy, tónované sklá, klimatizáciu a bezpečnostné pásy.',
      en: 'The spacious bus is suitable for regional and cross-country lines, airport transportation, organized tours, or excursions. The bus features an audio and video system, reclining seats, footrests, tinted windows, air conditioning, and seat belts.',
    },
    slug: 'iveco-irisbus-evadys-h-2',
    equipment: {
      sk: [
        'polohovateľné sedadlá',
        'chladnička',
        'tónované sklá',
        'náladové osvetlenie',
        'rozhlasová aparatúra',
        'klimatizácia',
        'TV s DVD prehrávačom',
        'bezpečnostné pásy',
        'kávovar',
      ],
      en: [
        'reclining seats',
        'fridge',
        'tinted windows',
        'mood lighting',
        'audio and video system',
        'air condition',
        'TV with a DVD player',
        'seat belts',
        'coffee machine',
      ],
    },
    gallery: [
      '/media/vehicles/iveco-irisbus-evadys-h-2/1.jpg',
      '/media/vehicles/iveco-irisbus-evadys-h-2/2.jpg',
      '/media/vehicles/iveco-irisbus-evadys-h-2/3.jpg',
      '/media/vehicles/iveco-irisbus-evadys-h-2/4.jpg',
    ],
  },
];
