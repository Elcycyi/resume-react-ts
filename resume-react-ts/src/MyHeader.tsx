import type { UserProfile } from "./types"

// Пропсы компонента тоже описываем интерфейсом
interface MyHeaderProps {
  user: UserProfile
}

function MyHeader({ user }: MyHeaderProps) {
  return (
    <header className="header">
      <h1>{user.name}</h1>
      <p className="role">{user.role}</p>
      <ul className="contacts">
        <li>{user.city}</li>
        <li>{user.phone}</li>
        <li>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </li>
        <li>
          <a href={`https://${user.github}`} target="_blank" rel="noreferrer">
            {user.github}
          </a>
        </li>
      </ul>
    </header>
  )
}

export default MyHeader
