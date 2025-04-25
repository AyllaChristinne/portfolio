import experiences from '../../data/prof-exp.json'
import { formatPeriodWithSince } from '../../functions/formatDate'

export function Timeline() {
  return (
    <div className="timeline">
      {experiences.map((exp) => (
        <div className="exp space-y-1">
          <h3 className="text-md font-bold">{exp.company}</h3>
          <p className="text-textSecondary text-sm">{exp.description}</p>
          <p className="text-sm whitespace-pre">
            {formatPeriodWithSince(exp.startDate, exp.endDate)}
          </p>
        </div>
      ))}
    </div>
  )
}
