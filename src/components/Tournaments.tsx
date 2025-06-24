import Icon from "@/components/ui/icon";

const Tournaments = () => {
  const tournaments = [
    {
      title: "CS2 Championship",
      prize: "50,000 ₽",
      date: "15 Дек",
      players: "128",
      status: "active",
      game: "CS2",
    },
    {
      title: "Dota 2 Pro League",
      prize: "75,000 ₽",
      date: "22 Дек",
      players: "64",
      status: "upcoming",
      game: "Dota 2",
    },
    {
      title: "Valorant Masters",
      prize: "30,000 ₽",
      date: "28 Дек",
      players: "256",
      status: "upcoming",
      game: "Valorant",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold text-neon-cyan mb-4 cyberpunk-glow">
            ТУРНИРЫ
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Участвуйте в киберспортивных турнирах и выигрывайте крупные призы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <TournamentCard key={index} tournament={tournament} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 rounded-lg transition-all duration-300">
            Все турниры
            <Icon name="ArrowRight" className="inline ml-2" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const TournamentCard = ({ tournament }: { tournament: any }) => (
  <div className="neon-box p-6 rounded-lg hover:scale-105 transition-transform duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="text-xs px-2 py-1 rounded bg-neon-green/20 text-neon-green border border-neon-green">
        {tournament.game}
      </div>
      <div
        className={`text-xs px-2 py-1 rounded ${
          tournament.status === "active"
            ? "bg-neon-pink/20 text-neon-pink border border-neon-pink"
            : "bg-neon-purple/20 text-neon-purple border border-neon-purple"
        }`}
      >
        {tournament.status === "active" ? "Активен" : "Скоро"}
      </div>
    </div>

    <h3 className="font-orbitron text-xl font-bold text-white mb-2">
      {tournament.title}
    </h3>

    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-white/60">Призовой фонд:</span>
        <span className="text-neon-cyan font-bold">{tournament.prize}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-white/60">Игроков:</span>
        <span className="text-white">{tournament.players}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-white/60">Дата:</span>
        <span className="text-white">{tournament.date}</span>
      </div>
    </div>

    <button className="w-full mt-6 py-2 bg-neon-purple/20 border border-neon-purple text-neon-purple hover:bg-neon-purple/30 rounded transition-all duration-300">
      <Icon name="Trophy" className="inline mr-2" size={16} />
      Участвовать
    </button>
  </div>
);

export default Tournaments;
