"use client";

import { ArrowUpRight, Sparkle, Heart, Envelope, Star } from "@phosphor-icons/react";
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
      className="relative overflow-hidden border-t border-amber-400/10 bg-background px-6 pb-28 pt-24 md:px-12 md:pb-36 md:pt-32"
    >
      {/* ── Ambient background layers ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-amber-500/[0.04] blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-600/[0.03] blur-[120px]"
      />
      {/* Subtle radial vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, transparent 50%, rgba(8,7,6,0.7) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-20 md:grid md:grid-cols-[1.15fr_0.85fr] md:gap-20">
        <AnimatedSection className="flex flex-col gap-10">
          {/* ── Badge ── */}
          <AnimatedItem>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/25 bg-gradient-to-r from-amber-400/15 to-amber-500/5 px-5 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200 backdrop-blur-xl shadow-[0_0_25px_-8px_rgba(251,191,36,0.4)]">
              <Envelope size={14} weight="fill" className="text-amber-300 animate-pulse" />
              <span>A Personal Letter &mdash; Just For Prachi 🌻❤️</span>
            </div>
          </AnimatedItem>

          {/* ── Title ── */}
          <AnimatedItem>
            <h2 className="max-w-[18ch] font-serif text-4xl font-normal leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.8rem] italic">
              &ldquo;Dil Se&hellip;
              <br />
              <span className="gold-gradient-text not-italic font-semibold inline-block mt-1">
                Just For Prachi.
              </span>
              &rdquo;{" "}
              <span className="text-3xl md:text-4xl">🎀✨</span>
            </h2>
          </AnimatedItem>

          {/* ── The Letter Card ── */}
          <AnimatedItem>
            <div className="letter-card relative rounded-[28px] border border-amber-300/20 bg-gradient-to-br from-[#0f0d09]/90 via-[#0c0a07]/95 to-[#080706] p-8 md:p-11 backdrop-blur-2xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9),0_0_40px_-8px_rgba(251,191,36,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]">
              {/* Royal Sunflower Seal */}
              <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-300/30 text-xl shadow-[0_0_25px_rgba(251,191,36,0.35)] transition-transform duration-500 hover:rotate-12 hover:scale-110">
                🌻
              </div>

              <div className="space-y-6 font-sans text-[15px] leading-[1.75] text-zinc-300 md:text-base">
                {/* Opening */}
                <div className="space-y-1">
                  <p className="font-serif text-amber-200/90 text-sm tracking-widest uppercase">
                    Dear Prachii...
                  </p>
                  <p className="text-amber-100/90 font-serif italic text-lg md:text-xl leading-relaxed">
                    Hey Prachii... 🥹❤️
                    Sach kahu to ye poora sunflower garden sirf aur sirf tumhara mood accha karne ke liye banaya tha... pressure bilkul mat lena iska 👉👈. Tum khush rehti ho na to sab kuch bohot pyaara lagta hai.
                  </p>
                </div>

                {/* ── Honest Confession Box ── */}
                <div className="relative rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/[0.08] via-[#100d08] to-amber-600/[0.04] p-5 sm:p-7 space-y-4 shadow-[inset_0_1px_0_rgba(251,191,36,0.1),0_8px_32px_-8px_rgba(0,0,0,0.5)]">
                  {/* Confession header */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/15 border border-amber-300/25">
                      <span className="text-sm">💭</span>
                    </div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                      Deepak&apos;s Honest Confession
                    </span>
                  </div>

                  <p className="font-serif italic text-amber-100/90 leading-[1.8] text-[15px] md:text-base">
                    &ldquo;Kitni ajeeb baat hai na, meri assumptions or instincts kabhi galat nhi hote... lekin Prachi ke case me hamesha fail! Prachi ke samne mera kuch kaam karta hi nhi h 😂. Upar se tumhari personality bhi abtak ki sabse unique wali h &mdash; jaha mera kuch bhi logic kaam nhi aata. Bohot special ho tum, bohot unique ho.&rdquo;
                  </p>

                  <p className="font-sans text-[13px] md:text-sm text-zinc-400 leading-relaxed">
                    Kuch log mujhe apna role model bol dete hain... lekin idhar to dekho me hamesha sochta reh jata hu ki kya sahi rahega or kya nhi. Is se mujhe feel hota h ki me abhi bhi bohot kuch nhi janta.
                  </p>

                  {/* Miss karta hu card */}
                  <div className="rounded-xl border border-amber-400/15 bg-black/50 p-4 sm:p-5 transition-all duration-300 hover:border-amber-400/30 hover:bg-black/40">
                    <p className="font-serif italic text-amber-200/90 text-sm sm:text-[15px] leading-[1.8]">
                      &ldquo;Sach kahu to miss to me karta hu wo sab... tumhare snaps, apni daily ya alternative days wali talks... tumhare taunts... suggestions... or wo happy moments... 🥹💛&rdquo;
                    </p>
                  </div>

                  {/* Arindam secret */}
                  <div className="border-t border-amber-400/15 pt-4">
                    <div className="flex items-start gap-2.5">
                      <Star size={14} weight="fill" className="text-amber-400 mt-0.5 shrink-0" />
                      <p className="font-serif italic text-sm md:text-[15px] text-amber-200/85 leading-[1.75]">
                        &ldquo;Tumne mere se poocha tha na Arindam kya bolta h tumhare baare me... mene us din tumko sab nhi bataya tha... is baar jab kabhi poochogi tab bataunga... because I know tumko ab bohot accha lagega sunke. Mera hi dost h wo... ✨&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Besties & Patchup Heartfelt Proposal ── */}
                <div className="relative rounded-2xl border-l-[3px] border-amber-400/40 bg-gradient-to-r from-amber-400/[0.06] to-transparent pl-5 pr-4 py-5 sm:pl-7 sm:pr-6 sm:py-6 space-y-4">
                  <p className="text-amber-100/85 italic font-serif leading-[1.8] text-[14px] md:text-[15px]">
                    &ldquo;Prachi wo saari misunderstandings ki wajah se hua tha... conversation gap ke chalte. If it doesn&apos;t hurt/suffocate you... can we forget the breakup and patchup like besties we were before? Future ko future pe chhordo, present moments enjoy karo. Agar tumko dikkat na ho to can we restore... but if it feels harsh harsh to rehne dooo 👉👈. Ye bas tumhara mood accha karne ke liye banaya tha, pressure nhi lena...&rdquo; Mujhe bs samajh hi nhi aa rha ki me kya karu... mn to kar rha h mana lu.... , lekin fir khyl aa rha ki kyaa ho wo manane se aur pareshaan ho jaayee. Yahi War Chal rhi h tabse. IDK Bohot confused huuu... manana bhi hai aur pareshan bhi nhi karna.... Kaash koi  rasta dikh jata yrrrr...
                  </p>

                  {/* Telegram Dilemma Note */}
                  <div className="rounded-xl border border-amber-400/20 bg-black/45 p-4 sm:p-5 transition-all duration-300 hover:border-amber-400/35">
                    <p className="font-serif italic text-amber-200/95 text-[14px] md:text-[15px] leading-[1.8]">
                      &ldquo;Yr Prachi me sochta hi reh jata hu text karu na karu... mujhe pta h tum Telegram pe padhne aati ho, aur me nhi chahta tum meri chat ko upar dekh ke muh bna lo ya kharab feel karo, isiliye meri koshish rahegi ki naa jaaye koi bhi. Tum karogi ki nhi karogi, nhi pta mujhe to... 🥺👉👈&rdquo;
                    </p>
                  </div>

                  <p className="text-zinc-300/90 font-sans text-[13px] md:text-sm leading-[1.75]">
                    pata h me kcuh accha karne ka socta hu har baar or koi na koi kaand ho jata h mujh se 😩 or dar bhi laga rehta h ki tumko kuch bura naa lag jaaye to dar dar ke sab karta hu, plan karke... Lekin fir bhi sab kharab ho jata h pta nhi kaiseeee....
                  </p>
                  <p className="text-zinc-300/90 font-sans text-[13px] md:text-sm leading-[1.75]">
                    Ab to mujhe pata chal gaya h ki tumko pasand to hainnn ye diariyaan mairiyaaannn... isiliye jab mera mn hoga to me mere midnight thoughts jo obviously sweet honge wo sab tumhare liye likhunga... aur tumhe pta h ki me kabhi bhi tumhare liye kuch bhi karne se nhi katraata... wahi continue rakhunga.. new new tareefen.. Taaki jab tum free raho to ye tumhare mood ko accha kar de... aur tumhare chehre pe wo wide smile aa jaaye✨ Joker ki tarah 🫣 kyuki I know now ki tum padhogi hiiii... maybe sone se pahle ya dopahar me padhai se break ke baad.. Ya fir kabhi low feel karte time. Yr prachi mujhe kuch nhi chaiye tumse.. bs meri pasandeeda ladki ko happy happy rakha karo bs.. Ek joke maarne ka mn kar rha h waise🫣 bina tumhari permission maar rha hu.. Baat Baat pe ubal jaati ho kahi tum Chaiii(Tea) to nhiii 🫣.
                  </p>
                </div>

                {/* ── Blame Protection Promise ── */}
                <div className="flex items-start gap-3 rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-4 sm:p-5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/15 border border-amber-300/25 text-sm">
                    🛡️
                  </div>
                  <p className="text-zinc-200 leading-[1.75] text-[14px] md:text-[15px]">
                    Aur tum kuch bhi karo, kuch bhi kaho me kabhi bhi tumpe blame nhi aane dunga 👉👈 mt dara karo us cheez se... aur{" "}
                    <span className="font-serif italic text-amber-300 font-medium">
                      Prachi kabhi galti nhi karti, wo to perfect h guys 👉👈❤️ Or kuch gadbad ho jaaye to me hu naa..
                    </span>
                  </p>
                </div>

                {/* ── Thin lips wide smile & communication note ── */}
                <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.07] to-transparent p-5 sm:p-6 space-y-3 shadow-[inset_0_1px_0_rgba(251,191,36,0.08)]">
                  <p className="font-serif italic text-amber-100/90 leading-[1.8] text-[15px] md:text-base">
                    &ldquo;Mujhe pta h mene bola tha shaam tk aajayega wo udhar, lekin wo bohot din se messed up tha isiliye thoda sa time lag gaya! Dekh lena, acche se padh lena. Bas dukhi nhi rehna...{" "}
                    <span className="text-amber-300 font-semibold not-italic">
                      thin lips pe wide smile rakha karo!
                    </span>{" "}
                    🥹✨&rdquo;
                  </p>
                  <p className="font-sans text-[13px] md:text-sm text-zinc-400 leading-relaxed">
                    Aur tumko jo bhi chahiye ho na, tum bata diya karo, kyuki me confused rehta hu fir mistakes ho jaati h 👉👈.
                  </p>
                </div>

                {/* ── Final Blessing ── */}
                <div className="relative mt-2 rounded-2xl border border-amber-300/25 bg-gradient-to-br from-amber-500/[0.1] via-[#0e0c08] to-amber-400/[0.05] p-6 sm:p-8 text-center shadow-[0_0_50px_-15px_rgba(251,191,36,0.15)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-6 items-center gap-1 rounded-full bg-[#0c0a07] border border-amber-400/30 px-3">
                    <Sparkle size={10} weight="fill" className="text-amber-400" />
                    <span className="text-[9px] uppercase tracking-[0.3em] text-amber-300 font-semibold">
                      Final Words
                    </span>
                    <Sparkle size={10} weight="fill" className="text-amber-400" />
                  </div>
                  <p className="font-serif italic text-amber-200 text-lg sm:text-xl md:text-[22px] leading-[1.7] pt-2">
                    Khushhhhhhhhhhhhhhhhh raho hamesha! Ab bohot acche se padhai karo, sab accha hota h jab aapka mann khush hota h. Umeed to hai sunflower jaisi prachi ko ye sunflower wali tareef pasand aayegi..!! kyun haina!!
                  </p>
                  <p className="mt-4 font-sans font-bold text-amber-300 text-base sm:text-lg tracking-wide">
                    ✨ Bhaad me jaaye sab, bas khush raho tum. 🌻
                  </p>
                </div>
              </div>

              {/* ── Letter Footer / Signature ── */}
              <div className="mt-10 flex items-center justify-between border-t border-amber-300/15 pt-6">
                <span className="font-serif italic text-sm sm:text-base text-amber-300 flex items-center gap-2">
                  <Heart size={16} weight="fill" className="text-amber-400 animate-pulse" />
                  Hamesha Tumhare Saath &bull; Deepak
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                  Sunflower Garden &bull; 2026
                </span>
              </div>
            </div>
          </AnimatedItem>

          {/* ── CTA Button ── */}
          <AnimatedItem>
            <a
              href="#footer"
              className="group inline-flex items-center gap-2.5 self-start rounded-full border border-amber-400/25 bg-gradient-to-r from-amber-400/15 to-amber-500/5 px-7 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-amber-200 backdrop-blur-xl transition-all duration-300 hover:border-amber-300/50 hover:from-amber-400/25 hover:to-amber-500/10 hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)] active:translate-y-[1px]"
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

        {/* ── Right Column: Deepak's Authentic Attributes ── */}
        <AnimatedSection className="flex flex-col md:mt-3">
          <AnimatedItem>
            <div className="pb-7 border-b border-amber-400/10">
              <span className="font-serif italic text-[11px] tracking-[0.25em] text-amber-400 uppercase">
                Deepak&apos;s Real Vibe
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground tracking-tight mt-2">
                The Essence of{" "}
                <span className="gold-gradient-text">&bull; Prachi</span>
              </h3>
            </div>
          </AnimatedItem>

          <div className="divide-y divide-amber-400/[0.08]">
            {deepakAttributes.map((row, i) => (
              <AnimatedItem key={row.label}>
                <div className="group relative flex items-start justify-between gap-5 py-6 transition-all duration-300 hover:bg-amber-400/[0.02] rounded-xl px-2 sm:px-3">
                  {/* Hover glow indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[2px] rounded-full bg-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />

                  <div className="flex flex-col gap-1.5 pl-2">
                    <span className="flex items-center gap-2 font-serif italic text-xs tracking-wider text-amber-300/90">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/10 border border-amber-400/15 text-sm transition-transform duration-300 group-hover:scale-110">
                        {row.icon}
                      </span>
                      <span>{row.label}</span>
                    </span>
                    <span className="font-sans text-[12px] md:text-[13px] text-zinc-500 leading-relaxed pl-9">
                      {row.note}
                    </span>
                  </div>
                  <span className="shrink-0 font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-right gold-gradient-text italic transition-transform duration-300 group-hover:translate-x-[-2px]">
                    {row.value}
                  </span>
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* ── Bottom accent line ── */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-amber-400/30 to-transparent" />
            <span className="text-lg">🌻</span>
            <div className="h-px flex-1 bg-gradient-to-l from-amber-400/30 to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
