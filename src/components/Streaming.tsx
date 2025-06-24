import Icon from "@/components/ui/icon";

const Streaming = () => {
  const streams = [
    {
      streamer: "CyberPro",
      game: "CS2",
      viewers: "2.1K",
      title: "Про-стратегии в Mirage",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    },
    {
      streamer: "GameMaster",
      game: "Dota 2",
      viewers: "1.8K",
      title: "Анализ мета патча 7.35",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      streamer: "NeonGamer",
      game: "Valorant",
      viewers: "3.2K",
      title: "Как играть на Jett",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c96a7096?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 px-4 bg-darker-bg/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold text-neon-green mb-4 cyberpunk-glow">
            LIVE СТРИМЫ
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Смотрите лучших игроков и учитесь у профессионалов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {streams.map((stream, index) => (
            <StreamCard key={index} stream={stream} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-neon-green/20 border border-neon-green text-neon-green hover:bg-neon-green/30 rounded-lg transition-all duration-300">
            <Icon name="Play" className="inline mr-2" size={18} />
            Все стримы
          </button>
        </div>
      </div>
    </section>
  );
};

const StreamCard = ({ stream }: { stream: any }) => (
  <div className="neon-box p-0 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
    <div className="relative">
      <div className="aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center">
        <Icon name="Play" className="text-white/50" size={48} />
      </div>

      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-xs bg-black/60 px-2 py-1 rounded text-white">
          LIVE
        </span>
      </div>

      <div className="absolute top-4 right-4 bg-black/60 px-2 py-1 rounded text-xs text-white">
        <Icon name="Eye" className="inline mr-1" size={12} />
        {stream.viewers}
      </div>
    </div>

    <div className="p-4">
      <div className="flex items-center space-x-3 mb-3">
        <img
          src={stream.avatar}
          alt={stream.streamer}
          className="w-10 h-10 rounded-full border-2 border-neon-cyan"
        />
        <div>
          <div className="font-bold text-white">{stream.streamer}</div>
          <div className="text-xs text-neon-cyan">{stream.game}</div>
        </div>
      </div>

      <p className="text-white/80 text-sm mb-4">{stream.title}</p>

      <button className="w-full py-2 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/30 rounded transition-all duration-300">
        Смотреть
      </button>
    </div>
  </div>
);

export default Streaming;
