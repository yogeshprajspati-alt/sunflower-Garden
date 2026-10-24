export const BOUQUET_FRAME_COUNT = 200;

export const bouquetFramePath = (n: number) =>
  `/frames4/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

export type BouquetBeat = {
  id: string;
  show: number;
  hide: number;
  badge: string;
  quote: string;
  subnote: string;
  speaker: string;
};

export interface PoemStanza {
  stanza: number;
  badge: string;
  lines: string[];
}

export const PRACHI_POEM_STANZAS: PoemStanza[] = [
  {
    stanza: 1,
    badge: "Chehra Khilta Hai ❤️",
    lines: [
      "Phoolon mein jaise sunflower khilta hai,",
      "Waise hi tumhara chehra khilta hai,",
      "Tumhare nakhron ka kya hi kehna,",
      "Har andaaz tumhara pyaara lagta hai. ❤️",
    ],
  },
  {
    stanza: 2,
    badge: "Apni Alag Kahaani 🌻✨",
    lines: [
      "Kabhi shararat, kabhi nadaani,",
      "Kabhi nakhre, kabhi manmaani,",
      "Apni hi dhun mein rehne wali,",
      "Tumhari apni alag kahaani. 🌻✨",
    ],
  },
  {
    stanza: 3,
    badge: "Khayaal Chala Aaye 🥹❤️",
    lines: [
      "Dhoop khile toh rang nikhar jaaye,",
      "Halki hawa se phool lehraye,",
      "Jab bhi koi sunflower nazar aaye,",
      "Prachi ka khayaal chala aaye. 🥹❤️",
    ],
  },
  {
    stanza: 4,
    badge: "Sabse Niraali 🌻",
    lines: [
      "Na gulaab, na chaand ka sawaal,",
      "Prachi, tumhara apna kamaal,",
      "Phool toh khilte hain har daali,",
      "Par tumhari baat hai sabse niraali. 🌻",
    ],
  },
  {
    stanza: 5,
    badge: "Ek Alag Kahaani 🎀",
    lines: [
      "Chehre pe smile, baaton mein pyaar,",
      "Tumse roshan lage har tyohar,",
      "Thode se nakhre, thodi shaitaani,",
      "Aur un sab mein chhupi hai ek alag kahaani. 🎀",
    ],
  },
  {
    stanza: 6,
    badge: "Tumhara Andaaz 💛",
    lines: [
      "Kabhi cute, kabhi nakchadhi,",
      "Kabhi seedhi, kabhi tedhi,",
      "Tumhara andaaz, tumhari ada,",
      "Sach mein, tumse milti nahi koi doosri jagah. 💛",
    ],
  },
  {
    stanza: 7,
    badge: "Dua & Blessing 🌻✨",
    lines: [
      "Sunflower ki tarah khilti raho,",
      "Apni hi dhun mein chalti raho,",
      "Khushiyon se bhari rahe har subah,",
      "Aur hansi se sajti rahe har ek raah. 🌻✨",
    ],
  },
];

export const BOUQUET_BEATS: BouquetBeat[] = [
  {
    id: "bq1",
    show: 0.05,
    hide: 0.22,
    badge: "Chehra & Andaaz ❤️",
    quote: `Phoolon mein jaise sunflower khilta hai,
Waise hi tumhara chehra khilta hai,
Tumhare nakhron ka kya hi kehna,
Har andaaz tumhara pyaara lagta hai. ❤️

Kabhi shararat, kabhi nadaani,
Kabhi nakhre, kabhi manmaani,
Apni hi dhun mein rehne wali,
Tumhari apni alag kahaani. 🌻✨`,
    subnote: "Apni hi dhun mein rehne wali, tumhari apni alag kahaani ✨",
    speaker: "Nazm &bull; Band I & II",
  },
  {
    id: "bq2",
    show: 0.26,
    hide: 0.44,
    badge: "Prachi Ka Khayaal 🥹❤️",
    quote: `Dhoop khile toh rang nikhar jaaye,
Halki hawa se phool lehraye,
Jab bhi koi sunflower nazar aaye,
Prachi ka khayaal chala aaye. 🥹❤️

Na gulaab, na chaand ka sawaal,
Prachi, tumhara apna kamaal,
Phool toh khilte hain har daali,
Par tumhari baat hai sabse niraali. 🌻`,
    subnote: "Jab bhi sunflower nazar aaye, tumhara khayaal chala aaye 💛",
    speaker: "Nazm &bull; Band III & IV",
  },
  {
    id: "bq3",
    show: 0.48,
    hide: 0.66,
    badge: "Chehre Pe Smile 🎀✨",
    quote: `Chehre pe smile, baaton mein pyaar,
Tumse roshan lage har tyohar,
Thode se nakhre, thodi shaitaani,
Aur un sab mein chhupi hai ek alag kahaani. 🎀

Kabhi cute, kabhi nakchadhi,
Kabhi seedhi, kabhi tedhi,
Tumhara andaaz, tumhari ada,
Sach mein, tumse milti nahi koi doosri jagah. 💛`,
    subnote: "Tumhara andaaz, tumhari ada — sach mein tumse milti nahi koi doosri jagah 🌸",
    speaker: "Nazm &bull; Band V & VI",
  },
  {
    id: "bq4",
    show: 0.70,
    hide: 0.90,
    badge: "Khilti Raho Hamesha 🌻✨",
    quote: `Sunflower ki tarah khilti raho,
Apni hi dhun mein chalti raho,
Khushiyon se bhari rahe har subah,
Aur hansi se sajti rahe har ek raah. 🌻✨`,
    subnote: "Khushiyon se bhari rahe har subah, hansi se sajti rahe har ek raah 🫶🏻",
    speaker: "Dua &bull; Only For Prachi 🌻",
  },
];

export const BOUQUET_INTRO_FADE_END = 0.08;
