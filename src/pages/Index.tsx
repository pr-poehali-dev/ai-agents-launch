import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleTestDrive = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Запрос отправлен!",
      description: "Юля свяжется с вами в ближайшее время для тест-драйва.",
    });
    setMessage('');
    setChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
      
      <nav className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/логотип.png" 
            alt="AI Скорая помощь" 
            className="h-12 w-auto"
          />
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#agents" className="hover:text-cyan-400 transition-colors">Агенты</a>
          <a href="#results" className="hover:text-cyan-400 transition-colors">Результаты</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Контакты</a>
          <Button 
            onClick={() => setChatOpen(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0"
          >
            Тест-драйв
          </Button>
        </div>
      </nav>

      <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-cyan">
            AI-агенты для вашего бизнеса
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100/80 mb-8 font-light">
            Мы как <span className="text-cyan-400 font-medium">Скорая помощь</span> — быстро реагируем на ваш запрос и закрываем боли бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setChatOpen(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-lg px-8 py-6 border-0 glow-cyan-hover"
            >
              <Icon name="Zap" className="mr-2" />
              Получить тест-драйв
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-6"
              onClick={() => document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши агенты
            </Button>
          </div>
        </div>
      </section>

      <section id="agents" className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-cyan">
          Наши разработки
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-glow hover:scale-105 transition-all duration-300 animate-scale-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-4xl">⚖️</div>
                <CardTitle className="text-2xl text-cyan-400">AI-Юрисконсульт</CardTitle>
              </div>
              <CardDescription className="text-lg text-cyan-100/70">
                «Семён Семёныч»
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-cyan-100/90">Анализ документов и договоров</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-cyan-100/90">Доступ к судебной базе данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-cyan-100/90">Поиск релевантных прецедентов</span>
                </li>
              </ul>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-4">
                <p className="text-cyan-300 font-semibold">
                  Сокращает время на рутинные задачи в 10 раз
                </p>
              </div>
              <a 
                href="https://clck.ru/3QnM5Z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-300"
                >
                  <Icon name="ExternalLink" className="mr-2" size={18} />
                  Попробовать
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-glow hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-4xl">🚗</div>
                <CardTitle className="text-2xl text-cyan-400">AI-Автомеханик</CardTitle>
              </div>
              <CardDescription className="text-lg text-cyan-100/70">
                «Михалыч»
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-cyan-100/90">Диагностика неисправностей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-cyan-100/90">Расчет стоимости ремонта</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-cyan-100/90">Поиск запчастей</span>
                </li>
              </ul>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-4">
                <p className="text-purple-300 font-semibold">
                  Экономия времени и денег на диагностике
                </p>
              </div>
              <a 
                href="https://clck.ru/3QnnYQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-300"
                >
                  <Icon name="ExternalLink" className="mr-2" size={18} />
                  Попробовать
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="results" className="relative z-10 container mx-auto px-4 py-20 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-cyan">
          Наши результаты
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
            <Icon name="Building2" className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Строительный бизнес</h3>
            <p className="text-cyan-100/80">
              Смета за <span className="text-cyan-400 font-bold">5 минут</span>
            </p>
            <p className="text-cyan-100/50 text-sm mt-1">(было 3 дня)</p>
          </div>
          
          <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all">
            <Icon name="ShoppingBag" className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-purple-300 mb-3">Fashion-retail</h3>
            <p className="text-cyan-100/80">
              Автоматический <span className="text-purple-400 font-bold">парсинг конкурентов</span>
            </p>
            <p className="text-cyan-100/50 text-sm mt-1">Мониторинг цен 24/7</p>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 glow-cyan">
            Готовы начать?
          </h2>
          <p className="text-xl text-cyan-100/80 mb-12">
            Свяжитесь с нами для бесплатного тест-драйва
          </p>
          
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-glow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-cyan-400 mb-2">Юля</p>
                  <p className="text-cyan-100/70">Руководитель проектов</p>
                </div>
                
                <div className="flex flex-col gap-4 w-full">
                  <a 
                    href="https://t.me/Tyazhelova" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0"
                    >
                      <Icon name="Send" className="mr-2" />
                      Telegram: @Tyazhelova
                    </Button>
                  </a>
                  
                  <a 
                    href="tel:+79250043039"
                    className="block"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <Icon name="Phone" className="mr-2" />
                      +7 (925) 004-30-39
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="relative z-10 border-t border-cyan-500/20 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-cyan-100/50">
          <p>© 2024 AI Скорая помощь. Разработка и запуск AI-агентов для бизнеса</p>
        </div>
      </footer>

      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <Card className="w-full max-w-md bg-slate-900 border-glow animate-scale-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-cyan-400">Тест-драйв AI-агента</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setChatOpen(false)}
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  <Icon name="X" />
                </Button>
              </div>
              <CardDescription className="text-cyan-100/70">
                Расскажите о вашей задаче, и мы подберём решение
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTestDrive} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    required
                    className="bg-slate-800 border-cyan-500/30 text-cyan-100 placeholder:text-cyan-100/40"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-slate-800 border-cyan-500/30 text-cyan-100 placeholder:text-cyan-100/40"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите вашу задачу или боль бизнеса"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="bg-slate-800 border-cyan-500/30 text-cyan-100 placeholder:text-cyan-100/40"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0"
                >
                  <Icon name="Send" className="mr-2" />
                  Отправить запрос
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
