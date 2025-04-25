import { About } from './components/about/About'
import { Header } from './components/header/Header'
import { Introduction } from './components/introduction/Introduction'
import { Projects } from './components/projects/Projects'
import { Stacks } from './components/stacks/Stacks'
function App() {
  return (
    <div className="page-container">
      <Header />
      <Introduction />
      <About />
      <Stacks />
      <Projects />
    </div>
  )
}

export default App
