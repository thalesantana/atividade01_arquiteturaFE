export const Hero = () => {
  return (
    <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-12 max-w-5xl mx-auto">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/72896088?v=4"
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Thales Santana
          </h1>
          <p className="text-lg text-muted-foreground">
            Olá! Graduado em Engenharia de Controle e Automação e atualmente
            cursando pós-graduação em Arquitetura de Software Distribuído,
            tenho 3 anos de experiência como Desenvolvedor Full Stack
            proficiente em desenvolvimento web, utilizando tecnologias como
            JavaScript, TypeScript, Node.js, NestJS, React, NextJs, C# e
            .NET. Minha expertise também inclui bancos de dados relacionais
            e não relacionais, Docker, AWS, testes unitários e controle de
            versão com GitHub. Estou buscando novas oportunidades e estou
            altamente motivado para continuar aprendendo e desenvolvendo
            novas habilidades em desenvolvimento de software.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};