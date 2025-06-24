import Icon from "@/components/ui/icon";

const Guides = () => {
  const guides = [
    {
      title: "Основы киберспорта",
      category: "Обучение",
      difficulty: "Новичок",
      duration: "15 мин",
      icon: "BookOpen",
      color: "neon-cyan",
    },
    {
      title: "Тактики в команде",
      category: "Стратегия",
      difficulty: "Средний",
      duration: "25 мин",
      icon: "Users",
      color: "neon-purple",
    },
    {
      title: "Настройка оборудования",
      category: "Техника",
      difficulty: "Любой",
      duration: "10 мин",
      icon: "Settings",
      color: "neon-green",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold text-neon-purple mb-4 cyberpunk-glow">
            ГАЙДЫ И ОБУЧЕНИЕ
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Прокачай свои навыки с помощью профессиональных гайдов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <GuideCard key={index} guide={guide} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-neon-purple text-neon-purple hover:bg-neon-purple/10 rounded-lg transition-all duration-300">
            Все гайды
            <Icon name="ArrowRight" className="inline ml-2" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const GuideCard = ({ guide }: { guide: any }) => (
  <div className="neon-box p-6 rounded-lg hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-between mb-4">
      <div
        className={`w-12 h-12 rounded-lg bg-${guide.color}/20 border border-${guide.color} flex items-center justify-center`}
      >
        <Icon name={guide.icon} className={`text-${guide.color}`} size={24} />
      </div>
      <div className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">
        {guide.category}
      </div>
    </div>

    <h3 className="font-orbitron text-xl font-bold text-white mb-3">
      {guide.title}
    </h3>

    <div className="flex justify-between items-center text-sm text-white/60 mb-4">
      <span>{guide.difficulty}</span>
      <span>{guide.duration}</span>
    </div>

    <button
      className={`w-full py-2 bg-${guide.color}/20 border border-${guide.color} text-${guide.color} hover:bg-${guide.color}/30 rounded transition-all duration-300`}
    >
      Изучить
    </button>
  </div>
);

export default Guides;
