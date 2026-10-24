export const THIRD_FRAME_COUNT = 200;

export const thirdFramePath = (n: number) =>
  `/frames3/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

export type ThirdBeat = {
  id: string;
  show: number;
  hide: number;
  badge: string;
  quote: string;
  subnote: string;
  speaker: string;
};

export const THIRD_BEATS: ThirdBeat[] = [
  {
    id: "t1",
    show: 0.05,
    hide: 0.22,
    badge: "100 Things About Prachiii 😭🎀",
    quote: "tumhari cuteness yr 😭❤️, tumhare nakhre 😂, tumhara nakchadi hona 😭, tumhari smileee 🥹❤️ aur tumhara mujhe tease krna... har cheez ekdum next-level cute h!",
    subnote: "100 Reasons why Prachi is 10/10 (+1 nakchadi bonus) 🎀✨",
    speaker: "100 Reasons &bull; Part 1",
  },
  {
    id: "t2",
    show: 0.26,
    hide: 0.44,
    badge: "Apni Marzi Ki Queen 👑💅",
    quote: "tumhara kisi ki faltu baat na sunna 😭, apni baat pr ad jaana 😂, har baat ka savage reply ready rkhna... madam apne mood ki queen hain ekdm!",
    subnote: "Cute bhi hona aur savage bhi — zero drama, pure authenticity 👑",
    speaker: "Queen Vibes &bull; Part 2",
  },
  {
    id: "t3",
    show: 0.48,
    hide: 0.66,
    badge: "Fiercely Caring & Loyal 🥹❤️",
    quote: "tumhara apne logo ki fikr krna 🫶🏻, unke liye stand lena, aur bina extra effort ke itna sweet hona... tumhare andar strength aur sweetness dono bhari hui h.",
    subnote: "Chhoti chhoti baatein notice krna aur dil se saath nibhana 💛",
    speaker: "Caring Heart &bull; Part 3",
  },
  {
    id: "t4",
    show: 0.70,
    hide: 0.90,
    badge: "The Ultimate Truth 😭😭❤️",
    quote: "❤️ or kyuki tum PRAACHI ho yr 😭😭❤️ tumhari jagah koi or hota to shyd ye 100 reasons likhne ka mann bhi nhi krta. 🫶🏻❤️ princess bhi, nautanki bhi, nakchadi bhi aur pyaari toh itni ki kya hi batau 🎀🫶🏻",
    subnote: "10/10 hona aur upar se +1 nakchadi bonus forever 😭✨",
    speaker: "Reason #100 &bull; Only For Prachi 🌻",
  },
];

export const THIRD_INTRO_FADE_END = 0.08;
