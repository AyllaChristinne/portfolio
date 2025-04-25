import projects from '../../data/projects.json'
import { getStackIconPath } from '../../functions/getStackIconPath'
import { Icon } from '../icon/Icon'

export function Projects() {
  const titleClassNames = 'text-center text-4xl font-extrabold mb-12'

  return (
    <section id="projects">
      <h2 className={titleClassNames}>Projetos</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const stackIcons = getStackIconPath(project.stacks)

          return (
            <div className="bg-backgroundCard flex flex-col gap-3 rounded-md p-4">
              <img
                src={project.img}
                className="bg-background h-[250px] w-full rounded-md object-cover transition-transform duration-300 hover:scale-105 sm:h-[300px] lg:h-[180px]"
              />
              <div className="flex h-full w-full flex-col space-y-3">
                <h4 className="text-textPrimary mb-1 font-bold">
                  {project.title}
                </h4>
                <p className="text-textSecondary line-clamp-5 text-sm text-ellipsis">
                  {project.description}
                </p>
                {stackIcons && (
                  <div className="mt-auto flex gap-2">
                    {stackIcons.map((icon, i) => (
                      <Icon
                        key={project.stacks[i]}
                        size={24}
                        src={icon!}
                        title={project.stacks[i]}
                        className="object-contain"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-auto flex justify-center gap-5">
                {!project.githubLink && !project.liveSiteLink && (
                  <p className="text-sm">Em desenvolvimento</p>
                )}
                {project.liveSiteLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.liveSiteLink}
                    className="bg-highlight hover:bg-highlightHover flex h-10 w-[calc(50%-10px)] shrink-0 items-center justify-center rounded-lg text-sm hover:cursor-pointer"
                  >
                    Acessar
                  </a>
                )}
                {project.githubLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.githubLink}
                    className="bg-backgroundCard hover:bg-backgroundCardHover flex h-10 w-full items-center justify-center rounded-lg text-sm hover:cursor-pointer"
                  >
                    Ver no GitHub
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
