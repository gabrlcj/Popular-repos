import React from 'react'
import '../styles/Repositories.css'

export default function RepoGrid(props) {
  return (
    <div>
      <ul className='repositories'>
        {props.repos.map(({ id, name, owner, stargazers_count, html_url, avatar_url }) => (
          <li className='panel' key={id}>
            <ul>
              <img src={owner.avatar_url} alt='Avatar' />
              <li>
                <a href={html_url}>🔗 {name}</a>
              </li>
              <li>👤 @{owner.login}</li>
              <li>⭐ {stargazers_count}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
