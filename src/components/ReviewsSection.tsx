import { useState } from "react";
import Icon from "@/components/ui/icon";

const REVIEWS = [
  {
    name: "Анастасия К.",
    date: "март 2025",
    rating: 5,
    text: "Были с классом на выездном занятии — дети в полном восторге! Специалист всё объяснил, дал потрогать питомцев. Ни один ребёнок не испугался. Однозначно рекомендую для школьных мероприятий!",
  },
  {
    name: "Дмитрий В.",
    date: "февраль 2025",
    rating: 5,
    text: "Брали экзотариум на день рождения дочки. Удав и хамелеон произвели фурор! Все гости — и дети, и взрослые — были в диком восторге. Очень профессиональный подход, животные здоровые и ухоженные.",
  },
  {
    name: "Ольга М.",
    date: "январь 2025",
    rating: 5,
    text: "Посетили с семьёй — впечатления незабываемые. Боялась рептилий всю жизнь, а тут подержала агаму на руках и поняла, что они совсем не страшные. Ребёнок до сих пор вспоминает!",
  },
  {
    name: "Сергей П.",
    date: "декабрь 2024",
    rating: 5,
    text: "Организовали выезд в детский сад. Ребята были в восторге, воспитатели тоже. Хозяин очень доброжелательный, знает о своих питомцах всё. Спасибо за такой формат досуга!",
  },
  {
    name: "Марина Т.",
    date: "ноябрь 2024",
    rating: 5,
    text: "Ходили всей семьёй. Дети не хотели уходить. Особенно понравился хамелеон — наблюдали как он меняет цвет. Очень познавательно и интересно, рекомендую всем!",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length);

  const review = REVIEWS[current];

  return (
    <section className="py-20 px-4" style={{ background: "hsl(150,35%,6%)" }}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-cormorant font-bold text-4xl mb-3" style={{ color: "hsl(43,74%,62%)" }}>
            Отзывы
          </h2>
          <p className="text-base" style={{ color: "hsla(45,30%,92%,0.55)" }}>
            Что говорят наши гости
          </p>
        </div>

        <div
          className="relative rounded-2xl p-8 md:p-12"
          style={{
            background: "hsla(142,40%,12%,0.5)",
            border: "1px solid hsla(142,60%,42%,0.2)",
          }}
        >
          <div className="flex gap-1 mb-6 justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={20}
                className={i < review.rating ? "" : "opacity-20"}
                style={{ color: "hsl(43,74%,62%)", fill: i < review.rating ? "hsl(43,74%,62%)" : "transparent" }}
              />
            ))}
          </div>

          <blockquote
            className="text-lg md:text-xl font-cormorant italic text-center leading-relaxed mb-8"
            style={{ color: "hsla(45,30%,92%,0.9)" }}
          >
            «{review.text}»
          </blockquote>

          <div className="flex flex-col items-center gap-1">
            <span className="font-semibold" style={{ color: "hsl(142,60%,65%)" }}>
              {review.name}
            </span>
            <span className="text-sm" style={{ color: "hsla(45,30%,92%,0.4)" }}>
              {review.date} · vl.ru
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: "1px solid hsla(142,60%,42%,0.4)", color: "hsl(142,60%,60%)" }}
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background: i === current ? "hsl(43,74%,62%)" : "hsla(45,30%,92%,0.2)",
                    transform: i === current ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: "1px solid hsla(142,60%,42%,0.4)", color: "hsl(142,60%,60%)" }}
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.vl.ru/ekzotariumm?lsearch=экзотариум&utm_source=vl.ru&utm_medium=header_search#comments"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-all hover:opacity-80"
            style={{ color: "hsla(45,30%,92%,0.45)" }}
          >
            <Icon name="ExternalLink" size={14} />
            Все отзывы на vl.ru
          </a>
        </div>
      </div>
    </section>
  );
}
