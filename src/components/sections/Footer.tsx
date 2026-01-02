import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Icon name="Phone" size={20} className="text-accent" />
              Контакты и связь
            </h3>
            <div className="space-y-3 sm:space-y-4 text-white/80">
              <div>
                <div className="text-sm text-white/60 mb-1">Телефон / WhatsApp</div>
                <a href="tel:+996222308088" className="text-white hover:text-accent transition-colors">+996 222 308 088</a>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Email</div>
                <a href="mailto:info@infinitycards.kg" className="text-white hover:text-accent transition-colors">info@infinitycards.kg</a>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Юридический адрес</div>
                <p className="text-sm">Кыргызская Республика, г. Бишкек, ул. Федорова, 85</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Icon name="Building2" size={20} className="text-accent" />
              Юридическая информация
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm text-white/80">
              <div>
                <div className="text-white/60 mb-1">Наименование</div>
                <div className="font-semibold text-white">ОсОО "СИНЕРДЖИ ПАРТНЕРС"</div>
              </div>
              <div>
                <div className="text-white/60 mb-1">Генеральный директор</div>
                <div>Эрнст Шерхан</div>
              </div>
              <div>
                <div className="text-white/60 mb-1">ИНН</div>
                <div className="font-mono">00409202410257</div>
              </div>
              <div>
                <div className="text-white/60 mb-1">ОКПО</div>
                <div className="font-mono">33234302</div>
              </div>
              <div>
                <div className="text-white/60 mb-1">Рег. номер</div>
                <div className="font-mono">308010-3301-ООО</div>
              </div>
              <div>
                <div className="text-white/60 mb-1">ГНИ</div>
                <div>Свердловский (003)</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Icon name="Landmark" size={20} className="text-accent" />
              Банковские реквизиты
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-white/80">
              <div className="space-y-3">
                <div>
                  <div className="text-white/60 mb-1">Банк</div>
                  <div className="font-semibold text-white">ОАО "БАКАЙ БАНК"</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">БИК / Адрес банка</div>
                  <div>г. Бишкек, ул. Мичурина, 54</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-white/60 mb-1">Расчетный счет (KGS)</div>
                  <div className="font-mono text-base font-semibold text-white bg-white/10 px-3 py-2 rounded">1240020001749844</div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/70">
                  Все реквизиты актуальны. Вы можете использовать их для проверки контрагента и подготовки платежных документов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/60 text-center md:text-left">
            <div>
              © 2026 ОсОО "СИНЕРДЖИ ПАРТНЕРС". Производство пластиковых карт в Бишкеке.
            </div>
            <a href="#" className="hover:text-accent transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
