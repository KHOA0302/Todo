import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

function Search() {
  const [show, setShow] = useState(false)
  return (
    <div className={cx('wrapper')}>
      <label htmlFor='search-input'>
        <FontAwesomeIcon icon={faSearch} />
      </label>
      <input
        type='text'
        id='search-input'
        placeholder={show ? 'Search' : ''}
        onFocus={() => setShow(!show)}
        onBlur={() => setShow(!show)}
      />
    </div>
  )
}

export default Search
