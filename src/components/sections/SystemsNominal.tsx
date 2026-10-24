"use client";

import { ArrowUpRight, Sparkle, Heart } from "@phosphor-icons/react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const deepakAttributes = [
  {
    label: "Daily / Alt Talks & Snaps",
    value: "Bohot Miss Karta Hu 🥹",
    note: "Tumhare snaps, baatein, taunts, suggestions aur wo happy moments",
    icon: "📸",
  },
  {
    label: "Deepak's Super Instincts",
    value: "Prachi Ke Samne Fail 😂",
    note: "Duniya bhar me role model, par Prachi ke samne sab logic fail!",
    icon: "🧠",
  },
  {
    label: "Arindam Secret File",
    value: "Agli Baar Bataunga 😉",
    note: "Sunke bohot accha lagega... mera hi dost h wo!",
    icon: "🤫",
  },
  {
    label: "Blame & Safety Protocol",
    value: "Zero Blame Ever 👉👈",
    note: "Tum kuch bhi karo, Deepak kabhi tumpe blame nhi aane dega",
    icon: "🛡️",
  },
  {
    label: "Perfection Score",
    value: "100% Perfect ❤️",
    note: "Prachi kabhi galti nhi karti, wo to perfect h guys 👉👈",
    icon: "🎀",
  },
  {
    label: "Golden Smile Rule",
    value: "Thin Lips, Wide Smile 😊",
    note: "Bas dukhi nhi rehna, jo bhi chahiye bata diya karo!",
    icon: "🌸",
  },
  {
    label: "Life Protocol",
    value: "Bhaad Me Jaaye Sab! 🌻",
    note: "Bas khush raho tum, sab kuch accha hi hoga",
    icon: "✨",
  },
];

export function SystemsNominal() {
  return (
    <section
      id="letter"
      className="relative border-t border-amber-400/10 bg-background px-6 pb-28 pt-24 md:px-12 md:pb-36 md:pt-32"
    >
      {/* Decorative ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]"
      />

      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:grid md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-amber-200 backdrop-blur-md">
              <Sparkle size={13} weight="fill" className="text-amber-300" />
              <span>A Personal Letter &mdash; Just For Prachi 🌻❤️</span>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <h2 className="max-w-[18ch] font-serif text-3xl font-normal leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl italic">
              &ldquo;Dil Se&hellip;
              <br />
              <span className="gold-gradient-text not-italic font-semibold">Just For Prachi.</span>&rdquo; 🎀✨
            </h2>
          </AnimatedItem>

          <AnimatedItem>
            {/* Illuminated Letter Card */}
            <div className="card-surface relative p-7 md:p-10 rounded-3xl border border-amber-300/20 bg-[#0c0a07]/85 backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_30px_-5px_rgba(251,191,36,0.12)]">
              {/* Royal Sunflower Seal in corner */}
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                🌻
              </div>

              <div className="space-y-4 font-sans text-[15px] leading-relaxed text-zinc-300 md:text-base">
                <p className="text-amber-100/95 font-serif italic text-lg leading-relaxed">
                  Hey Prachii... 🥹❤️
                  Sach kahu to ye poora sunflower garden sirf aur sirf tumhara mood accha karne ke liye banaya tha... pressure bilkul mat lena iska 👉👈. Tum khush rehti ho na to sab kuch bohot pyaara lagta hai.
                </p>

                {/* Honest Confession Box */}
                <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/10 via-[#120e0a] to-amber-500/5 p-4 sm:p-6 my-2 space-y-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-base">💭</span>
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                      Deepak&apos;s Honest Confession
                    </span>
                  </div>
                  <p className="font-serif italic text-amber-100/95 leading-relaxed text-[15px] md:text-[16px]">
                    &ldquo;Kitni ajeeb baat hai na, meri assumptions or instincts kabhi galat nhi hote... lekin Prachi ke case me hamesha fail! Prachi ke samne mera kuch kaam karta hi nhi h 😂. Upar se tumhari personality bhi abtak ki sabse unique wali h &mdash; jaha mera kuch bhi logic kaam nhi aata. Bohot special ho tum, bohot unique ho.&rdquo;
                  </p>
                  <p className="font-sans text-xs md:text-[13px] text-zinc-300 leading-relaxed">
                    Kuch log mujhe apna role model bol dete hain... lekin idhar to dekho me hamesha sochta reh jata hu ki kya sahi rahega or kya nhi. Is se mujhe feel hota h ki me abhi bhi bohot kuch nhi janta.
                  </p>

                  <div className="rounded-xl border border-amber-400/15 bg-black/40 p-3 sm:p-3.5">
                    <p className="font-serif italic text-amber-200/95 text-xs sm:text-sm md:text-[14px] leading-relaxed">
                      &ldquo;Sach kahu to miss to me karta hu wo sab... tumhare snaps, apni daily ya alternative days wali talks... tumhare taunts... suggestions... or wo happy moments... 🥹💛&rdquo;
                    </p>
                  </div>

                  <div className="border-t border-amber-400/15 pt-2.5">
                    <p className="font-serif italic text-xs md:text-sm text-amber-200/90 leading-relaxed">
                      &ldquo;Tumne mere se poocha tha na Arindam kya bolta h tumhare baare me... mene us din tumko sab nhi bataya tha... is baar jab kabhi poochogi tab bataunga... because I know tumko ab bohot accha lagega sunke. Mera hi dost h wo... ✨&rdquo;
                    </p>
                  </div>
                </div>

                {/* Besties & Patchup Heartfelt Proposal */}
                <p className="border-l-2 border-amber-400/50 pl-4 py-2 text-amber-100/90 italic font-serif leading-relaxed bg-amber-400/5 rounded-r-xl text-[14px] md:text-[15px]">
                  &ldquo;Prachi wo saari misunderstandings ki wajah se hua tha... conversation gap ke chalte. If it doesn&apos;t hurt/suffocate you... can we forget the breakup and patchup like besties we were before? Future ko future pe chhordo, present moments enjoy karo. Agar tumko dikkat na ho to can we restore... but if it feels harsh harsh to rehne dooo 👉👈. Ye bas tumhara mood accha karne ke liye banaya tha, pressure nhi lena...&rdquo; Mujhe bs samajh hi nhi aa rha ki me kya karu... mn to kar rha h mana lu.... , lekin fir khyl aa rha ki kyaa ho wo manane se aur pareshaan ho jaayee. Yahi War Chal rhi h tabse. IDK Bohot confused huuu... manana bhi hai aur pareshan bhi nhi karna.... Kaash koi  rasta dikh jata yrrrr... 

                  pata h me kcuh accha karne ka socta hu har baar or koi na koi kaand ho jata h mujh se 😩 or dar bhi laga rehta h ki tumko kuch bura naa lag jaaye to dar dar ke sab karta hu, plan karke... Lekin fir bhi sab kharab ho jata h pta nhi kaiseeee....

                  Ab to mujhe pata chal gaya h ki tumko pasand to hainnn ye diariyaan mairiyaaannn... isiliye jab mera mn hoga to me mere midnight thoughts jo obviously sweet honge wo sab tumhare liye likhunga... aur tumhe pta h ki me kabhi bhi tumhare liye kuch bhi karne se nhi katraata... wahi continue rakhunga.. new new tareefen.. Taaki jab tum free raho to ye tumhare mood ko accha kar de... aur tumhare chehre pe wo wide smile aa jaaye✨ Joker ki tarah 🫣 kyuki I know now ki tum padhogi hiiii... maybe sone se pahle ya dopahar me padhai se break ke baad.. Ya fir kabhi low feel karte time. Yr prachi mujhe kuch nhi chaiye tumse.. bs meri pasandeeda ladki ko happy happy rakha karo bs.. Ek joke maarne ka mn kar rha h waise🫣 bina tumhari permission maar rha hu.. Baat Baat pe ubal jaati ho kahi tum Chaiii(Tea) to nhiii 🫣. 
                </p>

                {/* Blame Protection Promise */}
                <p className="text-zinc-200 leading-relaxed">
                  Aur tum kuch bhi karo, kuch bhi kaho me kabhi bhi tumpe blame nhi aane dunga 👉👈 mt dara karo us cheez se... aur <span className="font-serif italic text-amber-300 font-medium">Prachi kabhi galti nhi karti, wo to perfect h guys 👉👈❤️ Or kuch gadbad ho jaaye to me hu naa.. </span>
                </p>

                {/* Thin lips wide smile & communication note */}
                <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 sm:p-5 my-2 space-y-2">
                  <p className="font-serif italic text-amber-100/95 leading-relaxed text-[15px] md:text-base">
                    &ldquo;Mujhe pta h mene bola tha shaam tk aajayega wo udhar, lekin wo bohot din se messed up tha isiliye thoda sa time lag gaya! Dekh lena, acche se padh lena. Bas dukhi nhi rehna... <span className="text-amber-300 font-medium">thin lips pe wide smile rakha karo!</span> 🥹✨&rdquo;
                  </p>
                  <p className="font-sans text-xs md:text-sm text-zinc-300 leading-relaxed">
                    Aur tumko jo bhi chahiye ho na, tum bata diya karo, kyuki me confused rehta hu fir mistakes ho jaati h 👉👈.
                  </p>
                </div>

                {/* Exam & Khush Raho Blessing */}
                <p className="font-serif italic text-amber-200 text-lg sm:text-xl pt-2">
                  Khushhhhhhhhhhhhhhhhh raho hamesha! Ab bohot acche se padhai karo, sab accha hota h jab aapka mann khush hota h. <span className="font-sans not-italic font-semibold text-amber-300 underline decoration-amber-400/50 underline-offset-4">Bhaad me jaaye sab, bas khush raho tum.</span> 🌻✨
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-amber-300/15 pt-5">
                <span className="font-serif italic text-sm text-amber-300 flex items-center gap-1.5">
                  <Heart size={14} weight="fill" className="text-amber-400" />
                  Hamesha Tumhare Saath &bull; Deepak
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                  Sunflower
                </span>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <a
              href="#footer"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-amber-400/25 bg-amber-400/10 px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-amber-200 backdrop-blur-md transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-400/20 active:translate-y-[1px] shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)]"
            >
              <span>The Garden Archive</span>
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </AnimatedItem>
        </AnimatedSection>

        {/* Right Column: Deepak's Authentic Attributes */}
        <AnimatedSection className="flex flex-col divide-y divide-amber-400/10 border-t border-amber-400/10 font-sans md:mt-3">
          <AnimatedItem>
            <div className="pb-6">
              <span className="font-serif italic text-xs tracking-widest text-amber-300 uppercase">
                Deepak&apos;s Real Vibe
              </span>
              <h3 className="font-serif text-2xl font-medium text-foreground tracking-tight mt-1">
                The Essence of &bull; Prachi
              </h3>
            </div>
          </AnimatedItem>

          {deepakAttributes.map((row) => (
            <AnimatedItem key={row.label}>
              <div className="group flex items-baseline justify-between gap-6 py-5 transition-colors hover:bg-white/[0.01]">
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-serif italic text-xs tracking-wider text-amber-300/90">
                    <span>{row.icon}</span>
                    <span>{row.label}</span>
                  </span>
                  <span className="font-sans text-[13px] text-zinc-400">
                    {row.note}
                  </span>
                </div>
                <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-foreground md:text-3xl italic text-right gold-gradient-text">
                  {row.value}
                </span>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
