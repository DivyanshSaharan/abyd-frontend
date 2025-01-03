import React from 'react'
import './Header.css'
import assets from '../assets/assets'

const Header = () => {
  return (
    <>
      <header className='header'>
        <input className="search-bar" type="text" placeholder="Search for anything" />
        <div className="user-info">
          <div className='grant-access-btn'><button><svg width="24" height="16" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4.28711V0.287109L18 7.28711L11 14.2871V10.1871C6 10.1871 2.5 11.7871 0 15.2871C1 10.2871 4 5.28711 11 4.28711ZM17 3.28711V0.287109L24 7.28711L17 14.2871V11.2871L21 7.28711L17 3.28711Z" fill="white" />
          </svg>
            Grant Access</button></div>
          <div className="notifications">
            <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0678 23.9309V25.0113C19.0678 26.1575 18.5714 27.2568 17.688 28.0673C16.8046 28.8778 15.6064 29.3332 14.357 29.3332C13.1077 29.3332 11.9095 28.8778 11.026 28.0673C10.1426 27.2568 9.64628 26.1575 9.64628 25.0113V23.9309M26.9936 21.7315C25.1034 19.609 23.7689 18.5286 23.7689 12.6772C23.7689 7.3188 20.7864 5.40976 18.3317 4.48259C18.0056 4.35969 17.6987 4.07742 17.5993 3.77016C17.1687 2.42566 15.9616 1.24121 14.357 1.24121C12.7524 1.24121 11.5446 2.42634 11.1184 3.77151C11.019 4.08214 10.7121 4.35969 10.386 4.48259C7.92833 5.41111 4.94879 7.31339 4.94879 12.6772C4.94511 18.5286 3.61065 19.609 1.72046 21.7315C0.937304 22.6107 1.62331 23.9309 2.9931 23.9309H25.7283C27.0907 23.9309 27.7723 22.6066 26.9936 21.7315Z" stroke="#121212" stroke-width="1.44061" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <img src={assets.pfp} className="profile-icon"></img>
        </div>
      </header>
      <hr />
    </>
  )
}

export default Header
