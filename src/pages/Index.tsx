import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="mb-6">
              <img 
                src="https://cdn.poehali.dev/files/1767364301680.jpg" 
                alt="Infinity Cards Logo" 
                className="w-32 h-32 mx-auto object-contain"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Icon name="Factory" size={18} />
              <span>Прямые поставки от завода-производителя</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Изготовление пластиковых карт без наценок рекламных агентств
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Идеально для торговых сетей, заправок АЗС и спорт-клубов
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-accent">-20%</div>
                <div className="text-sm mt-1">Цена ниже рынка</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-accent">10-14</div>
                <div className="text-sm mt-1">Дней доставка</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-accent">1 год</div>
                <div className="text-sm mt-1">Гарантия</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm mt-1">Минимум шт</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6" asChild>
                <a href="https://wa.me/996222308088?text=Здравствуйте%2C%20узнал(а)%20о%20вас%20через%20сайт.%20Можете%20сделать%20просчет%20стоимости%20на%20карты%3F" target="_blank" rel="noopener noreferrer">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6" asChild>
                <a href="tel:+996222308088">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +996 222 308 088
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему мы, а не рекламные агентства?</h2>
            <p className="text-muted-foreground text-lg">Специализированный дилер vs широкий профиль</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-muted hover-scale">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Icon name="Store" size={24} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold">Рекламные агентства</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Высокая цена</div>
                        <div className="text-sm text-muted-foreground">Перепродают с наценкой на содержание офиса</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Местная печать</div>
                        <div className="text-sm text-muted-foreground">Струйные принтеры, краска стирается</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Низкая экспертиза</div>
                        <div className="text-sm text-muted-foreground">Не специализируются на картах</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover-scale shadow-lg">
                <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Icon name="Factory" size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">INFINITY CARDS</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Прямая цена</div>
                        <div className="text-sm text-muted-foreground">Контракт с заводом, минимальная наценка</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Промышленный офсет</div>
                        <div className="text-sm text-muted-foreground">Ламинация, служит годами</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Специализация</div>
                        <div className="text-sm text-muted-foreground">Только карты, знаем все нюансы</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему завод лучше местного цеха?</h2>
            <p className="text-muted-foreground text-lg">Мы не печатаем карты "за час на коленке". Мы запускаем промышленную линию.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Printer" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Офсетная печать</h3>
                <p className="text-muted-foreground">Идеальная цветопередача, которая не выцветает. Промышленное качество краски.</p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Layers" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Заводская ламинация</h3>
                <p className="text-muted-foreground">Пластик спекается в монолит — карта не расслоится в кошельке через месяц.</p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Scissors" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Точная вырубка</h3>
                <p className="text-muted-foreground">Края карты идеально гладкие, без заусенцев. Стандарт ISO 7810.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Компании Кыргызстана, которые выбрали качество</h2>
            <p className="text-white/80 text-lg">Поставляем карты на регулярной основе</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Puma', logo: null },
              { name: 'Anta Sports', logo: null },
              { name: 'Change Fitness', logo: null },
              { name: 'Bimar', logo: null },
              { name: 'Bishkek Petroleum', logo: null },
              { name: 'Партнер Нефть', logo: null },
              { name: 'Bisport', logo: null },
              { name: 'Pulse Gym', logo: null },
              { name: 'Uniqum', logo: 'https://cdn.poehali.dev/files/1767364890464.jpg' },
              { name: 'Федерация Профсоюза КР', logo: null }
            ].map((client, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover-scale border border-white/20 min-h-[100px] overflow-hidden">
                <div className="text-center w-full h-full flex items-center justify-center">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="w-full h-full object-cover p-4"
                    />
                  ) : (
                    <div className="text-base font-bold p-6">{client.name}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 shadow-lg" asChild>
              <a href="https://wa.me/996222308088?text=Здравствуйте%2C%20узнал(а)%20о%20вас%20через%20сайт.%20Можете%20сделать%20просчет%20стоимости%20на%20карты%3F" target="_blank" rel="noopener noreferrer">
                <Icon name="Calculator" className="mr-2" size={22} />
                Рассчитать стоимость
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Card Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Любые виды карт и персонализации</h2>
            <p className="text-muted-foreground text-lg">От простых дисконтных до чиповых и банковских</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Type" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Эмбоссирование</h3>
                    <p className="text-sm text-muted-foreground">Выдавленные символы с типпингом золотом, серебром или черным. Премиальный вид.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CreditCard" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Магнитная полоса</h3>
                    <p className="text-sm text-muted-foreground">HiCo / LoCo любой силы. Кодировка магнитной полосы входит в стоимость.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wifi" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">RFID чипы</h3>
                    <p className="text-sm text-muted-foreground">Em-Marine, Mifare (1K, Ultralight). Чип вшит внутри пластика, защищен от влаги.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="QrCode" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Штрих-коды и QR</h3>
                    <p className="text-sm text-muted-foreground">Любой формат (EAN-13, Code-128, QR). Печать под ламинатом — не стирается.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Именные карты</h3>
                    <p className="text-sm text-muted-foreground">ФИО, должность, фото. Индент-печать или термопечать переменных данных.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Landmark" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Банковские карты</h3>
                    <p className="text-sm text-muted-foreground">Стандарт ISO 7810. Идеальная геометрия, устойчивость к банкоматам.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Условия работы</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Package" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Минимальный заказ: от 500 штук</h3>
                      <p className="text-muted-foreground">Запуск офсетной машины на меньший тираж экономически нецелесообразен. Заказывая от 500 шт., вы получаете себестоимость карты в 2 раза ниже.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Срок доставки: 10-14 рабочих дней</h3>
                      <p className="text-muted-foreground">Производство и доставка в Бишкек. Доставим бесплатно до вашего офиса с полным пакетом документов.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Полный пакет документов</h3>
                      <p className="text-muted-foreground">Договор, счет на оплату, электронная счет-фактура. Для бухгалтерии все прозрачно.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Схема работы: От макета до доставки</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: "FileCheck", title: "Заявка и макет", desc: "Проверяем ваш дизайн на соответствие ISO стандартам" },
                { icon: "FileSignature", title: "Договор с местным юр. лицом", desc: "Вы платите нам в сомах, мы решаем вопросы валютных переводов" },
                { icon: "Factory", title: "Производство", desc: "Запуск линии. Контроль качества на каждом этапе" },
                { icon: "Truck", title: "Доставка и документы", desc: "Привозим карты в офис вместе с закрывающими документами" }
              ].map((step, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name={step.icon as any} size={28} className="text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-xl mb-1">{step.title}</h3>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Готовы обсудить ваш заказ?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" size={32} className="mx-auto mb-3 text-accent" />
                  <div className="font-semibold mb-1">Офис в Бишкеке</div>
                  <div className="text-sm text-white/80">ул. Юсупа Абдрахманова 249</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-3 text-accent" />
                  <div className="font-semibold mb-1">Телефон</div>
                  <a href="tel:+996222308088" className="text-sm text-white/80 hover:text-white transition-colors">+996 222 308 088</a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-accent" />
                  <div className="font-semibold mb-1">Мессенджеры</div>
                  <div className="text-sm text-white/80">WhatsApp / Telegram</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6" asChild>
                <a href="https://t.me/infinity_cards_tg" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={20} />
                  Написать в Telegram
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6" asChild>
                <a href="https://wa.me/996222308088" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageSquare" className="mr-2" size={20} />
                  Написать в WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Phone" size={20} className="text-accent" />
                Контакты и связь
              </h3>
              <div className="space-y-4 text-white/80">
                <div>
                  <div className="text-sm text-white/60 mb-1">Телефон / WhatsApp</div>
                  <a href="tel:+996222308088" className="text-white hover:text-accent transition-colors">+996 222 308 088</a>
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">Email</div>
                  <a href="mailto:info@infinitycards.kg" className="text-white hover:text-accent transition-colors">info@infinitycards.kg</a>
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">Адрес офиса</div>
                  <p className="text-sm">Кыргызская Республика, г. Бишкек, ул. Федорова, 85</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Building2" size={20} className="text-accent" />
                Юридическая информация
              </h3>
              <div className="space-y-3 text-sm text-white/80">
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
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
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
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
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
    </div>
  );
};

export default Index;