export function Header() {
  const anchorClassNames =
    'focus:outline-2 outline-offset-2 outline-highlight hover:text-highlightHover transition-color duration-300'

  return (
    <div className="bg-backgroundHeader fixed inset-0 z-10 flex h-fit w-full flex-col items-center justify-between space-y-2 py-4 backdrop-blur-xs md:flex-row md:px-8 lg:h-16 lg:space-y-0 lg:px-8">
      <div className="flex items-center gap-2">
        <h1 className="text-textPrimary text-xl">Aylla Christinne</h1>
        <span className="text-textSecondary text-sm">Frontend Developer</span>
      </div>
      <nav>
        <ul role="navigation" className="flex gap-5 text-base">
          <li>
            <a href="#about" className={anchorClassNames}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#stacks" className={anchorClassNames}>
              Ferramentas e tecnologias
            </a>
          </li>
          <li>
            <a href="#projects" className={anchorClassNames}>
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
