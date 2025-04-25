import { Timeline } from '../timeline/Timeline'
import education from '../../data/education.json'
import { formatPeriod } from '../../functions/formatDate'

export function About() {
  const titleClassNames = 'text-center text-4xl font-extrabold mb-12'

  return (
    <section id="about" className="flex flex-col gap-30">
      <div>
        <h2 className={titleClassNames}>Experiência Profissional</h2>
        <Timeline />
      </div>
      <div>
        <h2 id="about" className={titleClassNames}>
          Formação
        </h2>
        <div className="flex flex-col justify-evenly gap-4 md:flex-row">
          {education.map((course) => (
            <div className="bg-backgroundCard space-y-1 rounded-lg px-5 py-6 text-center md:max-w-[300px]">
              <p className="text-base font-bold">{course.course}</p>
              <p className="text-sm">{course.institution}</p>
              <p className="text-sm">
                {formatPeriod(course.startYear, course.endYear)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
