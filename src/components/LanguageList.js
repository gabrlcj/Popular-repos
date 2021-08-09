import React from 'react'
import ImageReact from '../img/ImageReact.svg'
import Title from '../img/Title.svg'
import '../styles/NavBar.css'

export default function LanguagesList(props) {
  const languages = ['All', 'Javascript', 'Python', 'Ruby']

  return (
    <nav className='navbar'>
      <div>
        <img src={ImageReact} alt='React' />
        <img src={Title} alt='Choose a language' />
      </div>
      <ul>
        {languages.map((language) => (
          <li key={language} onClick={() => props.onSelectedLanguage(language)}>
            <span>{language}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
