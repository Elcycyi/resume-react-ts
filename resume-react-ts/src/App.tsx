import { useState } from "react"
import "./App.css"
import MyHeader from "./MyHeader"
import Section from "./Section"
import SkillList from "./SkillList"
import JobList, { showPeriod } from "./JobList"
import { jobs, languages, profile, skillGroups, studies } from "./data"

function App() {
  // useState с явным типом: показывать ли контакты полностью
  const [showBio, setShowBio] = useState<boolean>(true)

  return (
    <div className="page">
      <MyHeader user={profile} />

      <Section title="О себе">
        <p>{showBio ? profile.bio : "Текст скрыт"}</p>
        <button className="toggle" onClick={() => setShowBio(!showBio)}>
          {showBio ? "Свернуть" : "Показать"}
        </button>
      </Section>

      <Section title="Навыки">
        <SkillList groups={skillGroups} />
      </Section>

      <Section title="Опыт">
        <JobList jobs={jobs} />
      </Section>

      <Section title="Образование">
        {studies.map((study) => (
          <article className="item" key={study.place}>
            <div className="item-head">
              <h3>{study.place}</h3>
              <span className="period">{showPeriod(study.period)}</span>
            </div>
            <p className="place">{study.speciality}</p>
          </article>
        ))}
      </Section>

      <Section title="Языки">
        <ul className="languages">
          {languages.map((language) => (
            <li key={language.name}>
              <b>{language.name}</b> — {language.level}
            </li>
          ))}
        </ul>
      </Section>

      <footer className="footer">React + TypeScript + Vite · Жунусов Аазам, АИН-1-25</footer>
    </div>
  )
}

export default App
