import Icon from "@/components/ui/icon";

const Community = () => {
  const chatMessages = [
    { user: "CyberNinja", message: "Кто играет в CS2?", time: "сейчас" },
    { user: "ProGamer", message: "Ищу команду для турнира", time: "2 мин" },
    {
      user: "StreamKing",
      message: "Новый гайд по Valorant готов!",
      time: "5 мин",
    },
  ];

  return (
    <section className="py-20 px-4 bg-darker-bg/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold text-neon-pink mb-4 cyberpunk-glow">
            СООБЩЕСТВО
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Общайтесь с единомышленниками и находите новых союзников
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Chat Section */}
          <div className="neon-box p-6 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-orbitron text-xl font-bold text-neon-cyan">
                Live Chat
              </h3>
              <div className="flex items-center space-x-2 text-neon-green text-sm">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span>2.4K онлайн</span>
              </div>
            </div>

            <div className="space-y-4 mb-6 h-64 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-neon-purple/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-neon-purple" size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-neon-cyan text-sm font-bold">
                        {msg.user}
                      </span>
                      <span className="text-white/40 text-xs">{msg.time}</span>
                    </div>
                    <p className="text-white/80 text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Написать сообщение..."
                className="flex-1 bg-darker-bg border border-neon-cyan/30 rounded px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan"
              />
              <button className="px-4 py-2 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan rounded hover:bg-neon-cyan/30 transition-all">
                <Icon name="Send" size={16} />
              </button>
            </div>
          </div>

          {/* Social Features */}
          <div className="space-y-8">
            <div className="neon-box p-6 rounded-lg">
              <h3 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                Команды
              </h3>
              <p className="text-white/70 mb-4">
                Создавайте команды или присоединяйтесь к существующим
              </p>
              <button className="w-full py-3 bg-neon-green/20 border border-neon-green text-neon-green hover:bg-neon-green/30 rounded transition-all">
                <Icon name="Users" className="inline mr-2" size={18} />
                Найти команду
              </button>
            </div>

            <div className="neon-box p-6 rounded-lg">
              <h3 className="font-orbitron text-xl font-bold text-neon-purple mb-4">
                Форум
              </h3>
              <p className="text-white/70 mb-4">
                Обсуждайте игры, стратегии и делитесь опытом
              </p>
              <button className="w-full py-3 bg-neon-purple/20 border border-neon-purple text-neon-purple hover:bg-neon-purple/30 rounded transition-all">
                <Icon name="MessageCircle" className="inline mr-2" size={18} />
                Перейти в форум
              </button>
            </div>

            <div className="neon-box p-6 rounded-lg">
              <h3 className="font-orbitron text-xl font-bold text-neon-pink mb-4">
                События
              </h3>
              <p className="text-white/70 mb-4">
                Участвуйте в событиях сообщества и мероприятиях
              </p>
              <button className="w-full py-3 bg-neon-pink/20 border border-neon-pink text-neon-pink hover:bg-neon-pink/30 rounded transition-all">
                <Icon name="Calendar" className="inline mr-2" size={18} />
                Календарь событий
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
