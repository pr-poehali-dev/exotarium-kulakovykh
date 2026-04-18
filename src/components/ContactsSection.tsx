import Icon from "@/components/ui/icon";
import { useState } from "react";

const LOGO = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/ccea978b-e785-40af-a733-23243a096fe9.jpg";

const PHONE = "+79143428274";
const PHONE_DISPLAY = "+7 914 342-82-74";
const SUBMIT_LEAD_URL = "https://functions.poehali.dev/7a1ed6b5-239d-4dd5-a327-fba81a81ee08";

type ModalType = "privacy" | "consent" | null;

function LegalModal({ type, onClose }: { type: ModalType; onClose: () => void }) {
  if (!type) return null;
  const isPrivacy = type === "privacy";
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl p-8"
        style={{ background: "hsl(138,35%,97%)", border: "1px solid hsl(138,28%,82%)" }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity"
        >
          <Icon name="X" size={20} />
        </button>

        {isPrivacy ? (
          <>
            <h2 className="font-cormorant text-2xl font-bold mb-5">Политика конфиденциальности</h2>
            <div className="text-sm space-y-4" style={{ color: "hsla(150,30%,18%,0.85)" }}>
              <p><strong className="text-foreground">1. Общие положения</strong><br />
              Настоящая политика определяет порядок обработки и защиты персональных данных пользователей сайта Экзотариума Кулаковых.</p>
              <p><strong className="text-foreground">2. Какие данные мы собираем</strong><br />
              Имя, номер телефона и сообщение, которые вы оставляете в форме обратной связи.</p>
              <p><strong className="text-foreground">3. Цели обработки</strong><br />
              Данные используются исключительно для связи с вами: ответа на запрос, записи на посещение или уточнения деталей мероприятия.</p>
              <p><strong className="text-foreground">4. Хранение данных</strong><br />
              Персональные данные хранятся на защищённых серверах и не передаются третьим лицам без вашего согласия.</p>
              <p><strong className="text-foreground">5. Ваши права</strong><br />
              Вы вправе в любой момент запросить изменение или удаление ваших данных, обратившись по телефону или через форму на сайте.</p>
              <p><strong className="text-foreground">6. Контакты</strong><br />
              По вопросам обработки данных: <a href={`tel:${PHONE}`} style={{ color: "hsl(142,60%,50%)" }}>{PHONE_DISPLAY}</a>, г. Артём, ул. Лазо 11.</p>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-cormorant text-2xl font-bold mb-5">Согласие на обработку персональных данных</h2>
            <div className="text-sm space-y-4" style={{ color: "hsla(150,30%,18%,0.85)" }}>
              <p>Настоящим я, субъект персональных данных, в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных», свободно, своей волей и в своём интересе даю согласие на обработку моих персональных данных.</p>
              <p><strong className="text-foreground">Оператор:</strong><br />
              Экзотариум Кулаковых, г. Артём, ул. Лазо 11, ДЦ «Непоседа».</p>
              <p><strong className="text-foreground">Перечень данных:</strong><br />
              Имя, номер телефона, содержание сообщения.</p>
              <p><strong className="text-foreground">Цель обработки:</strong><br />
              Обратная связь, запись на посещение, информирование об услугах.</p>
              <p><strong className="text-foreground">Способы обработки:</strong><br />
              Сбор, запись, хранение, использование, передача уполномоченным лицам оператора.</p>
              <p><strong className="text-foreground">Срок действия согласия:</strong><br />
              До момента отзыва субъектом персональных данных.</p>
              <p>Согласие может быть отозвано путём направления письменного заявления по адресу оператора или по телефону <a href={`tel:${PHONE}`} style={{ color: "hsl(142,60%,50%)" }}>{PHONE_DISPLAY}</a>.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ContactsSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [modal, setModal] = useState<ModalType>(null);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch(SUBMIT_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", phone: "", message: "" });
        setAgreed(false);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      <LegalModal type={modal} onClose={() => setModal(null)} />

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Контакты</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Как нас <span className="gold-text">найти</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              {[
                { icon: "MapPin", label: "Адрес", value: "г. Артём, ул. Лазо 11\nДетский Центр «Непоседа»" },
                { icon: "Phone", label: "Телефон", value: PHONE_DISPLAY },
                { icon: "Clock", label: "Режим работы", value: "Уточняйте при записи" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: "hsl(138,35%,97%)", border: "1px solid hsl(138,28%,82%)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsla(142,60%,42%,0.2)", border: "1px solid hsla(142,60%,42%,0.3)" }}>
                    <Icon name={icon as "MapPin"} size={18} style={{ color: "hsl(142,60%,55%)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{label}</div>
                    <div className="font-medium whitespace-pre-line">{value}</div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl overflow-hidden green-glow relative" style={{ height: "18rem" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=132.766788,43.360263&z=15&pt=132.766788,43.360263,pm2gnm"
                  width="100%" height="100%" frameBorder="0" title="Карта Экзотариума Кулаковых"
                  style={{ filter: "grayscale(60%) brightness(0.55) hue-rotate(100deg)", minHeight: "18rem" }} />
                <div className="absolute bottom-4 left-4 glass px-4 py-3 rounded-xl">
                  <div className="text-xs text-muted-foreground">Экзотариум Кулаковых</div>
                  <div className="text-sm font-semibold">г. Артём, Лазо 11</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ background: "hsl(138,35%,97%)", border: "1px solid hsl(138,28%,82%)" }}>
              <h3 className="font-cormorant text-2xl font-bold mb-2">Оставить заявку</h3>
              <p className="text-sm mb-6" style={{ color: "hsla(150,30%,25%,0.65)" }}>
                Перезвоним в течение часа и ответим на все вопросы
              </p>

              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "hsla(142,60%,42%,0.2)", border: "1px solid hsla(142,60%,42%,0.4)" }}>
                    <Icon name="Check" size={28} style={{ color: "hsl(142,60%,55%)" }} />
                  </div>
                  <div className="font-cormorant text-2xl font-bold">Заявка принята!</div>
                  <p className="text-sm" style={{ color: "hsla(150,30%,25%,0.65)" }}>
                    Мы перезвоним вам в ближайшее время
                  </p>
                  <button onClick={() => setFormState("idle")}
                    className="text-sm underline mt-2" style={{ color: "hsl(142,60%,50%)" }}>
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{
                        background: "hsl(138,32%,93%)",
                        border: "1px solid hsl(138,28%,80%)",
                        color: "hsl(150,30%,15%)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+7 900 000-00-00"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{
                        background: "hsl(138,32%,93%)",
                        border: "1px solid hsl(138,28%,80%)",
                        color: "hsl(150,30%,15%)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Сообщение</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Хочу посетить зоопарк, записать ребёнка..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                      style={{
                        background: "hsl(138,32%,93%)",
                        border: "1px solid hsl(138,28%,80%)",
                        color: "hsl(150,30%,15%)",
                      }}
                    />
                  </div>
                  {formState === "error" && (
                    <p className="text-sm" style={{ color: "hsl(0,80%,65%)" }}>
                      Что-то пошло не так. Попробуйте ещё раз или позвоните нам.
                    </p>
                  )}
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={e => setAgreed(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center transition-colors"
                        style={{
                          background: agreed ? "hsl(142,60%,42%)" : "hsl(138,32%,93%)",
                          border: `1px solid ${agreed ? "hsl(142,60%,42%)" : "hsl(138,28%,80%)"}`,
                        }}
                      >
                        {agreed && <Icon name="Check" size={12} style={{ color: "#fff" }} />}
                      </div>
                    </div>
                    <span className="text-xs leading-relaxed" style={{ color: "hsla(150,30%,25%,0.65)" }}>
                      Я соглашаюсь с{" "}
                      <button type="button" onClick={e => { e.preventDefault(); setModal("consent"); }}
                        className="underline hover:opacity-80 transition-opacity">
                        обработкой персональных данных
                      </button>{" "}
                      и принимаю{" "}
                      <button type="button" onClick={e => { e.preventDefault(); setModal("privacy"); }}
                        className="underline hover:opacity-80 transition-opacity">
                        политику конфиденциальности
                      </button>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={formState === "loading" || !agreed}
                    className="btn-green w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-opacity disabled:opacity-40"
                  >
                    {formState === "loading" ? (
                      <>
                        <Icon name="Loader2" size={18} className="animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={18} />
                        Отправить заявку
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "hsl(138,40%,92%)", borderTop: "1px solid hsl(138,28%,82%)" }}>
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={LOGO} alt="Логотип" className="w-12 h-12 rounded-full object-cover"
                style={{ border: "2px solid hsl(43,74%,52%)" }} />
              <div>
                <div className="font-cormorant text-lg font-bold shimmer-text">Экзотариум Кулаковых</div>
                <div className="text-xs text-muted-foreground">Мир чешуи, чудес и живых эмоций</div>
              </div>
            </div>
            <div className="text-center text-sm" style={{ color: "hsla(150,30%,25%,0.65)" }}>
              <div>г. Артём, Лазо 11, ДЦ «Непоседа»</div>
              <a href={`tel:${PHONE}`} className="hover:opacity-70 transition-opacity" style={{ color: "hsl(43,74%,55%)" }}>
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="text-xs text-center space-y-1" style={{ color: "hsla(150,30%,25%,0.55)" }}>
              <div>© 2024 Экзотариум Кулаковых</div>
              <div>Контактный зоопарк · Выездные программы</div>
              <div className="flex gap-3 justify-center mt-1">
                <button onClick={() => setModal("privacy")}
                  className="underline hover:opacity-80 transition-opacity">
                  Политика конфиденциальности
                </button>
                <span>·</span>
                <button onClick={() => setModal("consent")}
                  className="underline hover:opacity-80 transition-opacity">
                  Обработка данных
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}