import React, { useState, useEffect, useRef } from 'react'

import TheHeader from '../../components/the-header/the-header'
import CompanyList from '../../components/company-list/company-list'
import SearchBar from '../../components/search-bar/search-bar'
import FilterDropdown from '../../components/filter-dropdown/filter-dropdown'
import SortDropdown from '../../components/sort-dropdown/sort-dropdown'
import Info from '../../components/info/info'

import './homepage.scss'

const Homepage = props => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterByCourse, setFilterByCourse] = useState('')
  const [sortBy, setSortBy] = useState('A-Ö')
  const [loggedInUser, setLoggedInUser] = useState(false)

  const loginRef = useRef()

  const setSearch = e => {
    setSearchTerm(e.target.value)
  }

  const filterCourses = e => {
    setFilterByCourse(e.target.value)
  }

  const sortCourses = e => {
    setSortBy(e.target.value)
  }

  //Apply filters:
  //Remove hidden companies from array
  const filterCompaniesByVisible = props.companyData.filter(company => company.synlig === true)

  //Match by search term
  const filteredCompaniesBySearch = filterCompaniesByVisible.filter(
    company => company.namn.toLowerCase().includes(searchTerm.toLowerCase()) || company.ort.toLowerCase().includes(searchTerm.toLowerCase())
  )

  //Match by course
  const filteredCompanies =
    filterByCourse === ''
      ? filteredCompaniesBySearch
      : filteredCompaniesBySearch.filter(company => company.utbildningar.includes(filterByCourse) || company.utbildningar.length === 0)

  //Sort filtered company list
  let filteredAndSorted = ''

  if (sortBy === 'A-Ö') {
    filteredAndSorted = filteredCompanies.sort((a, b) => a.namn.localeCompare(b.namn))
  }
  if (sortBy === 'Ö-A') {
    filteredAndSorted = filteredCompanies.sort((a, b) => b.namn.localeCompare(a.namn))
  }
  if (sortBy === 'timestamp') {
    filteredAndSorted = filteredCompanies.sort((a, b) => b.timestamp - a.timestamp)
  }

  const handleLogin = e => {
    e.preventDefault()
    console.log(loginRef.current.value)
    if (loginRef.current.value === 'iths21') {
      sessionStorage.setItem('loggedInToFP', 'true')
      setLoggedInUser(true)
    }
  }

  //Hooks
  useEffect(() => {
    const isLoggedInUser = sessionStorage.getItem('loggedInToFP')
    if (isLoggedInUser === 'true') {
      setLoggedInUser(true)
    }
  }, [])

  return (
    <React.Fragment>
      <TheHeader title="Företagspoolen" />
      {!loggedInUser && (
        <main className="homepage-wrapper__logged-out">
          <h3>Den här sidan är lösenordsskyddad</h3>
          <form onSubmit={handleLogin}>
            <label htmlFor="userPassword">Lösenord:</label>
            <input id="userPassword" type="password" ref={loginRef} />
            <button>Login</button>
          </form>
          <Info />
        </main>
      )}

      {loggedInUser && (
        <main className="homepage-wrapper">
          <section className="search">
            <SearchBar searchTerm={searchTerm} setSearch={setSearch} />
            <FilterDropdown filterCourses={filterCourses} />
            <SortDropdown sortCourses={sortCourses} />
          </section>
          {filteredCompanies.length > 0 ? <CompanyList companyData={filteredAndSorted} /> : <h6>Inga resultat</h6>}
          <Info />
        </main>
      )}
    </React.Fragment>
  )
}

export default Homepage
