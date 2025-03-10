import React from 'react'
import './mobileDownload.css'
import { assets } from '../../assets/asset'

function MobileDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Food App</p>
        <div className="app-download-platforms">
            <img src={assets.playstore} alt="" />
            <img src={assets.appstore} alt="" />
        </div>
    </div>
  )
}

export default MobileDownload