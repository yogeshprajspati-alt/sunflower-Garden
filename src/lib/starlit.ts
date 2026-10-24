export const STARLIT_FRAME_COUNT = 200;

export const starlitFramePath = (n: number) =>
  `/frames5/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

export type StarlitBeat = {
  id: string;
  show: number;
  hide: number;
  badge: string;
  quote: string;
  subnote: string;
  speaker: string;
};

export const STARLIT_BEATS: StarlitBeat[] = [
  {
    id: "s1",
    show: 0.05,
    hide: 0.22,
    badge: "Haaye Kya Ladki H Yr 😩❤️",
    quote: "haaye kya ladki h yr 😩 koi itna pyra kaise ho sakta h 😩 ohh my godsssss... Jab bhi iske baare me socho itna accha lagta h na ❤️",
    subnote: "Pure warmth and fondness under the starry night sky ✨",
    speaker: "Dil Ki Baat &bull; Part I",
  },
  {
    id: "s2",
    show: 0.26,
    hide: 0.44,
    badge: "Misunderstanding Thi 🥹🫶🏻",
    quote: "Prachi wo saari misunderstandings ki wajah se hua tha..... please uskoo misunderstanding ki tarah hi treat karo.... conversation gap ke chalte... if it doesn't hurt/suffocate you... then you know... can we forget the breakup and patchup like besties we were before...",
    subnote: "Apan ko wo sab nhi sochna chahiye tha, bas besties ki tarah 💛",
    speaker: "Honest Truth &bull; Part II",
  },
  {
    id: "s3",
    show: 0.48,
    hide: 0.66,
    badge: "Zero Pressure, Pure Sukoon 👉👈",
    quote: "future ko future pe chhordo present moments ko enjoy karo. Agar tumko dikkat na ho to can we restore..... but if it feels harsh harsh to rehne dooo... 👉👈 ye mene bs mood accha karne ke liye banaya tha... pressure nhi lena iska...",
    subnote: "Bas tumhara mood accha karne ke liye, koi pressure nahi 🌸",
    speaker: "Gentle Heart &bull; Part III",
  },
  {
    id: "s4",
    show: 0.70,
    hide: 0.90,
    badge: "Prachi Is Always Perfect 👉👈🎀",
    quote: "Or tum kuch bhi karo kuch bhi kaho me kabhi bhi tumpe blame nhi aane dunga 👉👈 mt dara karo us cheez se 👉👈 or prachi kabhi galati nhi karti.... wo to perfect h guys 👉👈❤️",
    subnote: "No blame, no fear — hamesha tumhare saath 🌻",
    speaker: "Sunflower Promise &bull; Part IV",
  },
];

export const STARLIT_INTRO_FADE_END = 0.08;
