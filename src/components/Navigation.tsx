import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-darker-bg/90 backdrop-blur-md border-b border-neon-cyan/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-orbitron text-2xl font-bold text-neon-cyan cyberpunk-glow">
            CYBER ARENA
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon="Gamepad2" text="Игры" />
            <NavLink icon="Calendar" text="События" />
            <NavLink icon="Users" text="Команды" />
            <NavLink icon="MessageCircle" text="Форум" />
            <NavLink icon="Play" text="Стримы" />
            <NavLink icon="BookOpen" text="Гайды" />
            <NavLink icon="Shield" text="Правила" />
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-neon-purple/20 border border-neon-purple text-neon-purple hover:bg-neon-purple/30 transition-all duration-300 rounded">
              Войти
            </button>
            <Icon name="Menu" className="md:hidden text-neon-cyan" size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, text }: { icon: string; text: string }) => (
  <a
    href="#"
    className="flex items-center space-x-2 text-white/80 hover:text-neon-cyan transition-colors duration-300 group"
  >
    <Icon
      name={icon}
      size={18}
      className="group-hover:text-neon-cyan transition-colors"
    />
    <span>{text}</span>
  </a>
);

export default Navigation;
