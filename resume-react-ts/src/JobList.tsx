import type { Job, Period } from "./types"

interface JobListProps {
  jobs: Job[]
}

// Функция с типизированными параметром и результатом
function showPeriod(period: Period): string {
  const [from, to] = period
  return `${from} — ${to}`
}

function JobList({ jobs }: JobListProps) {
  return (
    <div>
      {jobs.map((job) => (
        <article className="item" key={job.role}>
          <div className="item-head">
            <h3>{job.role}</h3>
            <span className="period">{showPeriod(job.period)}</span>
          </div>
          <p className="place">{job.company}</p>
          <ul>
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export { showPeriod }
export default JobList
