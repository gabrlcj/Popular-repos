import React, { Component } from 'react'
import './styles/App.css'

import Loading from './components/Loading'
import LanguagesList from './components/LanguageList'
import RepoGrid from './components/RepoGrid'
import Footer from './components/Footer'

window.API = {
  async fetchPopularRepos(language) {
    const encodedURI = encodeURI(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    )

    try {
      const data = await fetch(encodedURI)
      const repos = await data.json()
      return repos.items
    } catch (error) {
      console.warn(error)
      return null
    }
  },
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: [],
      activeLanguage: 'All',
      loading: true,
    }

    this.handleSelectLanguage = this.handleSelectLanguage.bind(this)
    this.fetchRepos = this.fetchRepos.bind(this)
  }

  componentDidMount() {
    this.fetchRepos(this.state.activeLanguage)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeLanguage !== this.state.activeLanguage) {
      this.fetchRepos(this.state.activeLanguage)
    }
  }

  fetchRepos(language) {
    this.setState({
      loading: true,
    })

    window.API.fetchPopularRepos(language).then((repos) => {
      this.setState({
        loading: false,
        repos,
      })
    })
  }

  handleSelectLanguage(language) {
    this.setState({
      activeLanguage: language,
    })
  }

  render() {
    return (
      <div>
        <LanguagesList onSelectedLanguage={this.handleSelectLanguage} />
        {this.state.loading === true ? (
          <Loading />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h1>Repos from: {this.state.activeLanguage}</h1>
            <Footer />
            <RepoGrid repos={this.state.repos} />
          </div>
        )}
      </div>
    )
  }
}

export default App
