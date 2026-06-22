export const weddingData = {
  bride: "Daria",
  groom: "Paweł",

  weddingDate: "2027-07-03T17:00:00",

  announcement:
    "Ta strona jest zapowiedzią naszego wyjątkowego dnia. Oficjalne zaproszenia prześlemy Wam w późniejszym terminie.",

  venue: {
    name: "Sala Maksymiliana w Zamku Książ",
    address: "Wałbrzych",
    mapUrl: process.env.NEXT_PUBLIC_MAP_URL ?? ""
  },

  schedule: [
    { time: "17:00", title: "Ślub na Sali Maksymiliana" },
    { time: "17:20", title: "Toast i zdjęcia z najbliższą rodziną" },
    { time: "18:15", title: "Zdjęcia grupowe przed zamkiem" },
    { time: "18:30", title: "Wejście do sali balowej, życzenia" },
    { time: "19:30", title: "Rozpoczęcie serwowania kolacji" }
  ],

  organization: [
    {
      title: "Dojazd",
      text: "Na miejsce uroczystości można dotrzeć samodzielnie lub skorzystać z przygotowanego przez nas autokaru, który wyruszy z Łoziny oraz Wrocławia. Autokar po uroczystości weselnej również wraca do Wrocławia i Łoziny, szczegółową lokalizacje podamy w późniejszym terminie."
    },
    {
      title: "Dzieci",
      text: "Nasze przyjęcie jest skierowane głównie do osób dorosłych. W szczególnych przypadkach, gdy nie ma możliwości zapewnienia opieki nad dziećmi, możliwe będzie skorzystanie z pomocy animatora. Prosimy o wcześniejsze zgłoszenie takiej potrzeby przy potwierdzeniu obecności."
    },
    {
      title: "Nocleg",
      text: "Szanowni Państwo, ze względów organizacyjnych nie jesteśmy w stanie zapewnić Państwu noclegów, dlatego zachęcamy do samodzielnej rezerwacji zakwaterowania w odpowiadającym Państwu obiekcie. Ze względu na ograniczoną dostępność miejsc, warto zrobić to z wyprzedzeniem.\nNa terenie Zamku znajdują się trzy hotele z czego jeden to hotel Zamku Książ.\nTel. +74 665 41 44\ne-mail: recepcja@hotelzamkowy.pl, w okolicy znajdują się również inne obiekty noclegowe."
    },
    {
      title: "Menu",
      text: "Przygotowaliśmy dwie opcje menu: mięsne oraz wegańskie. Prosimy o zgłoszenie wybranego wariantu telefonicznie przy potwierdzaniu obecności."
    }
  ],

  gifts:
    "Największym prezentem będzie dla nas Wasza obecność. Jeśli jednak chcielibyście nas obdarować, zamiast kwiatów, win i prezentów prosimy o wsparcie finansowe na realizację marzeń i budowę domu.",

  contacts: [
    {
      role: "Świadek",
      name: "Mikołaj Banaszkiewicz",
      phone: process.env.NEXT_PUBLIC_PHONE_MIKOLAJ ?? ""
    },
    {
      role: "Świadkowa",
      name: "Natalia Staniszewska",
      phone: process.env.NEXT_PUBLIC_PHONE_NATALIA ?? ""
    }
  ],

  photoShareUrl: process.env.NEXT_PUBLIC_PHOTO_URL ?? ""
};
