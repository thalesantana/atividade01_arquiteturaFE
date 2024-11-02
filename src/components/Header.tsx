export const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <nav className="flex space-x-12">
            <a href="#" className="text-lg font-medium hover:text-primary">
              Blog
            </a>
            <a href="#" className="text-lg font-medium hover:text-primary">
              Sobre
            </a>
            <a href="#" className="text-lg font-medium hover:text-primary">
              Descrição
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};