export const FRAME_COUNT = 200;

export const framePath = (n: number) =>
  `/frames/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  badge: string;
  quote: string;
  subnote: string;
  speaker: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.06,
    hide: 0.23,
    badge: "Alag Hi Combination 😭🫶🏻",
    quote: "Yr Prachiiii 😭😭😭 tumhari tareef karni ho na to smjh hi nhi aata kaha se shuru kru 😭😭 mtlb yr tum itni pyaari kaise ho skti ho 😭❤️ tumhari personality hi itni acchi h yr, tumhara baat krne ka tareeka, tumhara gussa karna, tumhara savage hona, tumhara care krna 😭😭😭 ekdm alg hi combination h madam ka 😭🫶🏻",
    subnote: "Itni pyaari kaise ho sakti ho tum? 😭❤️",
    speaker: "From Deepak 💛",
  },
  {
    id: "d2",
    show: 0.25,
    hide: 0.42,
    badge: "Unapologetic Confidence ✨",
    quote: "Aur pata hai tumhari ek baat mujhe bhot acchi lgti h ki tum apni baat rkhna jaanti ho, tumhe jo shi lgta h wo bolti ho, faltu me kisi ko khush krne ke liye khud ko change nhi krti 😭❤️ tumhare andar ek alg hi confidence h yr, or wo bhot accha lgta h.",
    subnote: "Khud me confident aur 100% real 🌸",
    speaker: "From Deepak 💛",
  },
  {
    id: "d3",
    show: 0.44,
    hide: 0.61,
    badge: "Pyaari Harkatein & Pagalpan 😂❤️",
    quote: "Upr se tumhari harkatein ufffffffff 😭😭😭 kbhi itni pyaari bn jaati ho ki kya hi bolu or kbhi itni pagal ki dimag kharab krdo 😭😭😂❤️ par sach bataun, tumhari yahi sweet aur thodi nautanki wali side tumhein sabse special banati hai!",
    subnote: "Kbhi itni pyaari, kbhi itni pagal 😭😂❤️",
    speaker: "From Deepak 💛",
  },
  {
    id: "d4",
    show: 0.63,
    hide: 0.80,
    badge: "Sweetness & Strength 🥹🫶🏻",
    quote: "Aur tumhara caring side bhi yr 🥹❤️ jis tarah apne logo ke liye stand leti ho, unki baatein sunti ho, unhe smjhti ho. Tum funny ho, smjhdaar ho, apni jagah strong ho, thodi si nautanki ho, thodi si ziddi ho 😭😂 or bhottttt pyaari ho yr. Literally tumhari personality ka ek ek aspect apni jagah accha h 😭😭❤️❤️",
    subnote: "Caring, strong, funny & bohot pyaari 😭🫶🏻",
    speaker: "From Deepak 💛",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
