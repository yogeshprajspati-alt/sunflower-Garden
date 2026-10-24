export const CINE_FRAME_COUNT = 200;

export const cineFramePath = (n: number) =>
  `/frames2/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  badge: string;
  quote: string;
  subnote: string;
  speaker: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.06,
    hide: 0.23,
    badge: "Apnapan & Baatein 😭❤️",
    quote: "Aur pata hai Prachiiii 😭😭 tumhari ek cheez bhot acchi h yr ki tumse baat krke kbhi aisa nhi lgta ki tum bas formality kr rhi ho 😭❤️ tumhare andar ek apnapan sa h, or tumhari baaton me bhi ek alag hi baat h yr. Tum kbhi hasa deti ho, kbhi dimag kharab kr deti ho 😭😂 or kbhi aisi baat bol deti ho ki bnda sochta reh jaaye ki yr kitni acchi baat boli isne ❤️",
    subnote: "Bina formality ke, ekdum dil se apnapan 🥹❤️",
    speaker: "From Deepak 💛",
  },
  {
    id: "b2",
    show: 0.25,
    hide: 0.42,
    badge: "Apna Perspective & Samajhdaari 💡✨",
    quote: "Aur tumhari smjhdaari bhi yr 😭🫶🏻 tum har cheez ko apne perspective se sochti ho, tumhare khudke opinions hain, tum cheezon ko observe krti ho. Mtlb aisa nhi h ki jo saamne wale ne bol diya tumne maan liya, tum khud sochti ho, smjhti ho or fir apni baat rkhti ho. Ye quality bhot acchi h tumhari ❤️",
    subnote: "Khudki soch, khudke opinions 🫶🏻",
    speaker: "From Deepak 💛",
  },
  {
    id: "b3",
    show: 0.44,
    hide: 0.61,
    badge: "Natural Cuteness 😭😂❤️",
    quote: "Aur madam ki cuteness ka to kya hi bolu 😭😭😭 tumhari chhoti chhoti harkatein, tumhara react krna, tumhara randomly kuch bhi bol dena 😭😂❤️ mtlb tumhe idea bhi nhi hoga ki tum kitni funny lgti ho kbhi kbhi. Or sabse achhi baat ye ki tumhe har waqt interesting bnne ki koshish nhi krni pdti, tum naturally hi entertaining ho yr 😭😭🫶🏻",
    subnote: "Naturally entertaining & so funny 😭😂🫶🏻",
    speaker: "From Deepak 💛",
  },
  {
    id: "b4",
    show: 0.63,
    hide: 0.80,
    badge: "Individuality, Loyalty & Layers 🥹🫶🏻",
    quote: "Tumhari individuality, loyalty or care bhi 🥹❤️ jb tum kisi ko importance deti ho na to pta chlta h ki tum us insaan ko seriously leti ho. Or haan madam, tum thodi ziddi ho, thodi dramebaaz ho, thodi pagal ho 😭😭😂 lekin yhi sb to tumhari personality ka part h naaa 😭❤️ jitna koi tumhe smjhega utni hi tumhari aur acchi qualities pta chlengi 🫶🏻",
    subnote: "Ziddi, dramebaaz, pagal & 100% loyal 🥹❤️",
    speaker: "From Deepak 💛",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
