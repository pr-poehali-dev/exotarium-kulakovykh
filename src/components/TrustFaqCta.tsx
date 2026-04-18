import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+79143428274";
const PHONE_DISPLAY = "+7 914 342-82-74";

const TRUST = [
  { icon: "Shield", label: "Безопасно", desc: "Все показы под контролем специалиста" },
  { icon: "BookOpen", label: "Познавательно", desc: "Живой урок природы для любого возраста" },
  { icon: "Sparkles", label: "Эмоционально", desc: "Рептилии удивляют даже тех, кто боится" },
  { icon: "Star", label: "Необычно", desc: "Формат, который невозможно забыть" },
  { icon: "MapPin", label: "Удобно", desc: "Выезжаем по городу и Приморскому краю" },
];

const FAQS = [
  {
    q: "Боюсь змей — это проблема?",
    a: "Совсем нет. Страх часто исчезает уже после первого знакомства. Когда видишь спокойное, красивое и грациозное животное вблизи, на смену тревоге приходит восхищение. Мы умеем мягко и бережно знакомить людей с рептилиями.",
  },
  {
    q: "Можно ли трогать животных?",
    a: "Да! Контакт — главная фишка нашего формата. Под руководством специалиста вы сможете подержать питомца, почувствовать его тепло и фактуру. Это абсолютно безопасно.",
  },
  {
    q: "Для какого возраста подходит?",
    a: "Для всех! Дошкольники, школьники, взрослые и даже пожилые гости — каждый найдёт что-то особенное. Малышам особенно нравятся черепашки и маленькие ящерки.",
  },
  {
    q: "Как далеко вы выезжаете?",
    a: "Работаем по городу Артём и всему Приморскому краю. Звоните — обсудим детали и стоимость выезда для вашего района.",
  },
];

export default function TrustFaqCta() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <div className="section-divider" />

      {/* TRUST */}
      <section id="trust" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Доверие</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Почему нас <span className="gold-text">выбирают</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {TRUST.map((t) => (
              <div key={t.label} className="card-hover rounded-2xl p-5 text-center"
                style={{ background: "hsl(138,35%,97%)", border: "1px solid hsl(138,28%,82%)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "linear-gradient(135deg, hsla(142,60%,35%,0.3), hsla(43,74%,52%,0.15))", border: "1px solid hsla(142,60%,42%,0.3)" }}>
                  <Icon name={t.icon as "Shield"} size={20} style={{ color: "hsl(142,60%,55%)" }} />
                </div>
                <div className="font-semibold mb-1 text-sm">{t.label}</div>
                <div className="text-xs" style={{ color: "hsla(150,30%,25%,0.65)" }}>{t.desc}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
            style={{ background: "hsl(138,35%,97%)", border: "1px solid hsl(138,28%,82%)" }}>
            <div>
              <div className="text-5xl mb-4">😰</div>
              <h3 className="font-cormorant text-3xl font-bold mb-4">
                Боитесь змей?<br /><span className="gold-text">Это нормально</span>
              </h3>
              <p className="leading-relaxed" style={{ color: "hsla(150,30%,18%,0.85)" }}>
                Часто страх исчезает уже после первого знакомства. Когда видишь спокойное, красивое и грациозное животное вблизи,
                на смену тревоге приходит восхищение. Мы умеем мягко и бережно знакомить людей с рептилиями — и детей, и взрослых.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { e: "😨", text: "До: «Нет, это же змея, я боюсь!»", active: false },
                { e: "😮", text: "Во время: «Ой, она такая мягкая...»", active: false },
                { e: "😍", text: "После: «Можно ещё раз подержать?»", active: true },
              ].map(({ e, text, active }) => (
                <div key={text} className="flex items-center gap-3 p-4 rounded-xl"
                  style={{
                    background: active ? "hsla(142,60%,42%,0.15)" : "hsl(138,32%,93%)",
                    border: `1px solid ${active ? "hsla(142,60%,42%,0.4)" : "hsl(138,28%,80%)"}`
                  }}>
                  <span className="text-xl">{e}</span>
                  <span className="text-sm" style={{ color: active ? "hsl(142,60%,65%)" : "hsla(150,30%,25%,0.85)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold mb-4">Частые <span className="gold-text">вопросы</span></h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden transition-all"
                style={{ background: "hsl(138,35%,97%)", border: `1px solid ${openFaq === i ? "hsla(142,60%,42%,0.5)" : "hsl(138,28%,82%)"}` }}>
                <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold">{faq.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18}
                    style={{ color: openFaq === i ? "hsl(142,60%,55%)" : "hsl(215,16%,47%)", flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm leading-relaxed border-t border-black/5 pt-4"
                    style={{ color: "hsla(150,30%,18%,0.85)" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(138,40%,93%), hsl(138,38%,91%))" }} />
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at center, hsl(43,74%,52%), transparent 60%)" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6 animate-float flex justify-center">
            <img
              src="https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/3befca5a-ec0d-48ad-ad36-0fd983a41c00.png"
              alt="Экзотариум Кулаковых"
              className="w-40 h-40 rounded-full object-cover"
              style={{ border: "2px solid hsla(43,74%,52%,0.4)", boxShadow: "0 0 40px hsla(142,60%,42%,0.3)" }}
            />
          </div>
          <h2 className="font-cormorant text-5xl font-bold mb-4">
            Не откладывайте <span className="gold-text">чудо</span>
          </h2>
          <p className="text-lg mb-2" style={{ color: "hsla(150,30%,25%,0.85)" }}>Экзотариум Кулаковых</p>
          <p className="mb-8" style={{ color: "hsla(150,30%,25%,0.65)" }}>г. Артём, Лазо 11, Детский Центр «Непоседа»</p>
          <a href={`tel:${PHONE}`}>
            <button className="btn-gold px-10 py-5 rounded-full text-xl font-semibold flex items-center gap-3 mx-auto animate-pulse-gold">
              <Icon name="Phone" size={22} />
              {PHONE_DISPLAY}
            </button>
          </a>
          <p className="mt-4 text-sm" style={{ color: "hsla(150,30%,25%,0.65)" }}>Забронируйте дату прямо сейчас</p>
        </div>
      </section>
    </>
  );
}