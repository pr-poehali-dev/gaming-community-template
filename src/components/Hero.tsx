import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-neon-cyan/20 rounded-full blur-2xl" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <Icon
              name="Zap"
              size={80}
              className="text-neon-purple cyberpunk-glow"
            />
            <Icon
              name="Shield"
              size={48}
              className="absolute top-4 left-4 text-neon-cyan cyberpunk-glow"
            />
          </div>
          <h1 className="font-vorcas text-6xl md:text-8xl font-medium text-transparent bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green bg-clip-text cyberpunk-glow">
            Essence of Oblivion
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto font-inter">
          Погрузитесь в мир забвения. Откройте тайны киберпространства, станьте
          частью элитного сообщества и познайте суть цифрового бытия.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-lg hover:scale-105 transition-transform duration-300 neon-box pulse-glow">
            <Icon name="Play" className="inline mr-2" size={20} />
            Начать игру
          </button>

          <button className="px-8 py-4 border border-neon-green text-neon-green hover:bg-neon-green/10 rounded-lg transition-all duration-300">
            <Icon name="Users" className="inline mr-2" size={20} />
            Присоединиться
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatCard number="50K+" label="Игроков" />
          <StatCard number="1,200+" label="Турниров" />
          <StatCard number="24/7" label="Стримов" />
          <StatCard number="15K+" label="Призов ₽" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="neon-box p-4 rounded-lg">
    <div className="font-orbitron text-2xl font-bold text-neon-cyan">
      {number}
    </div>
    <div className="text-white/60 text-sm mt-1">{label}</div>
  </div>
);

export default Hero;
