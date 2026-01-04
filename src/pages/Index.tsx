import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const buxes = [
    {
      id: 1,
      name: "ВКтаргет",
      description: "Популярный букс с заданиями в соцсетях",
      rating: 4.8,
      minPayout: "50₽",
      refLink: "https://vktarget.ru/?ref=123456",
      category: "Социальные сети"
    },
    {
      id: 2,
      name: "SEOsprint",
      description: "Один из старейших буксов Рунета",
      rating: 4.5,
      minPayout: "1$",
      refLink: "https://seosprint.net/?ref=123456",
      category: "Универсальный"
    },
    {
      id: 3,
      name: "Wmmail",
      description: "Букс с заданиями на чтение писем",
      rating: 4.3,
      minPayout: "10₽",
      refLink: "https://wmmail.ru/?ref=123456",
      category: "Email-маркетинг"
    }
  ];

  const partners = [
    {
      id: 1,
      name: "Admitad",
      description: "CPA-сеть с тысячами рекламодателей",
      rating: 4.9,
      commission: "До 20%",
      refLink: "https://admitad.com/ref/123456",
      category: "CPA сеть"
    },
    {
      id: 2,
      name: "AliExpress",
      description: "Партнерка крупнейшего маркетплейса",
      rating: 4.7,
      commission: "До 8.5%",
      refLink: "https://aliexpress.com/ref/123456",
      category: "E-commerce"
    },
    {
      id: 3,
      name: "Alpari",
      description: "Партнерская программа брокера",
      rating: 4.6,
      commission: "До 600$",
      refLink: "https://alpari.com/ref/123456",
      category: "Финансы"
    }
  ];

  const faqs = [
    {
      question: "Что такое реферальная ссылка?",
      answer: "Реферальная ссылка — это уникальная ссылка, по которой можно приглашать других пользователей. За каждого приглашенного вы получаете процент от его заработка или бонус."
    },
    {
      question: "Как начать зарабатывать?",
      answer: "Выберите интересующий вас букс или партнерку, зарегистрируйтесь по реферальной ссылке, получите свою уникальную ссылку и делитесь ею с другими."
    },
    {
      question: "Какие способы вывода денег?",
      answer: "Большинство платформ поддерживают вывод на WebMoney, Яндекс.Деньги, QIWI, банковские карты и криптовалюту."
    },
    {
      question: "Сколько можно заработать?",
      answer: "Заработок зависит от вашей активности и количества привлеченных рефералов. В среднем от 5 000₽ до 50 000₽ в месяц при активной работе."
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за сообщение, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
    setFormData({ name: "", email: "", message: "" });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name={star <= Math.floor(rating) ? "Star" : star - 0.5 <= rating ? "StarHalf" : "Star"}
            size={16}
            className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            RefLinks
          </h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("hero")} className="hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection("buxes")} className="hover:text-primary transition-colors">
              Буксы
            </button>
            <button onClick={() => scrollToSection("partners")} className="hover:text-primary transition-colors">
              Партнёрки
            </button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contacts")} className="hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Лучшие реферальные программы
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Заработай с RefLinks
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Подборка проверенных буксов и партнерских программ с высокими выплатами
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
              onClick={() => scrollToSection("buxes")}
            >
              <Icon name="MousePointerClick" size={20} className="mr-2" />
              Смотреть буксы
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              onClick={() => scrollToSection("partners")}
            >
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Партнёрки
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-2xl text-white">
              <Icon name="Users" size={32} className="mx-auto mb-3" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-white/80">Проверенных площадок</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-white">
              <Icon name="Wallet" size={32} className="mx-auto mb-3" />
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-white/80">Гарантия выплат</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-white">
              <Icon name="TrendingUp" size={32} className="mx-auto mb-3" />
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-white/80">Поддержка</p>
            </div>
          </div>
        </div>
      </section>

      <section id="buxes" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="MousePointerClick" size={14} className="mr-1" />
              Буксы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Лучшие буксы для заработка</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выполняйте простые задания и зарабатывайте деньги. Все площадки проверены и выплачивают без задержек
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buxes.map((bux, index) => (
              <Card
                key={bux.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{bux.category}</Badge>
                    <div className="flex items-center gap-2">
                      {renderStars(bux.rating)}
                      <span className="text-sm font-semibold">{bux.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{bux.name}</CardTitle>
                  <CardDescription>{bux.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Coins" size={16} className="text-primary" />
                      <span className="text-muted-foreground">Минимум для вывода:</span>
                      <span className="font-semibold">{bux.minPayout}</span>
                    </div>
                    <Button className="w-full gradient-primary" asChild>
                      <a href={bux.refLink} target="_blank" rel="noopener noreferrer">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        Начать зарабатывать
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="HandshakeIcon" size={14} className="mr-1" />
              Партнёрки
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Топовые партнерские программы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Продвигайте товары и услуги и получайте высокие комиссионные за каждую продажу
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card
                key={partner.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{partner.category}</Badge>
                    <div className="flex items-center gap-2">
                      {renderStars(partner.rating)}
                      <span className="text-sm font-semibold">{partner.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{partner.name}</CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Percent" size={16} className="text-accent" />
                      <span className="text-muted-foreground">Комиссия:</span>
                      <span className="font-semibold">{partner.commission}</span>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                      <a href={partner.refLink} target="_blank" rel="noopener noreferrer">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        Присоединиться
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="HelpCircle" size={14} className="mr-1" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">
              Ответы на самые популярные вопросы о заработке на буксах и партнерках
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-effect rounded-xl px-6 border-2"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Mail" size={14} className="mr-1" />
              Контакты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">
              Есть вопросы или предложения? Напишите нам!
            </p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Напишите ваше сообщение..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="glass-effect p-6 rounded-xl">
              <Icon name="Mail" size={24} className="mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">support@reflinks.ru</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <Icon name="MessageCircle" size={24} className="mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Telegram</h3>
              <p className="text-sm text-muted-foreground">@reflinks_support</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <Icon name="Clock" size={24} className="mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Режим работы</h3>
              <p className="text-sm text-muted-foreground">24/7</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 RefLinks. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Зарабатывайте с лучшими реферальными программами
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
