import type { SkillGroup } from "./types"

interface SkillListProps {
  groups: SkillGroup[]
}

function SkillList({ groups }: SkillListProps) {
  return (
    <div className="skills">
      {groups.map((group) => (
        <div className="group" key={group.title}>
          <h3>{group.title}</h3>
          <div className="tags">
            {group.items.map((skill) => (
              <span className={`tag level-${skill.level}`} key={skill.name}>
                {skill.name}
                <i>{skill.level}</i>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillList
