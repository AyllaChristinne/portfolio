import stacks from '../../data/stacks.json'
import { Icon } from '../icon/Icon'

export function Stacks() {
  const titleClassNames = 'text-center text-4xl font-extrabold mb-12'

  return (
    <section id="stacks">
      <h2 className={titleClassNames}>Ferramentas e tecnologias</h2>
      <div className="m-auto flex max-w-[775px] flex-wrap justify-center gap-5">
        {stacks.map((stack) => (
          <div className="stack-card">
            <div className="stack-imgContainer">
              <Icon
                src={stack.icon}
                title={stack.name}
                className="stack-logo"
              />
            </div>
            <span className="stack-text">{stack.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
