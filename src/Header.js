import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img
        src='https://thumbs.dreamstime.com/z/unique-japanese-cars-logo-honda-crx-torii-gate-japanese-flag-unique-japanese-cars-logo-honda-crx-jdm-238627540.jpg'
        alt='JDM Car Logo'
        className='header_Logo'
      />
      <div className='header_Search'>
        <input className='header_SearchInput' type='text' />
        <SearchIcon className='header_SearchIcon' />
      </div>
      <AccountBoxIcon className='header_Profile' />
      <ShoppingCartIcon className='header_Cart' />
    </div>
  )
}

export default Header
