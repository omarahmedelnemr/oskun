import React from 'react';
import './styles/mobileBlock.css'
import googlePlayImg from '../Content/googlePlay1.png'
import appStoreImg from '../Content/appstore1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function MobileBlock() {
  return (
        <div id='mobileBlock'>
            <h2>Thanks For Visting OSKUN</h2>
          {/* <p>Thanks For Visting OSKUN</p> */}
          <h4>But Unforutnatly our Website Doesn't Support Mobile View, You Can Try Our App For The Best Experince</h4>
          <h3> See You There <FontAwesomeIcon icon="fa-solid fa-face-smile-beam" /> </h3>
          <div className='row'>
            <a href='#'><img src ={googlePlayImg}className='googlePlay'/></a>
            <a href='#'><img src ={appStoreImg} className='appStore'/></a>
          </div>
                {/* <h2>Hello,</h2>
                <h3>Thanks For Visiting OSKUN</h3>
                <p>But unfortunatly the website Didn't  Provide the Best Experince For Mobile User, You Can Try Our App on GooglePlay or AppStore</p> */}
        </div>
  )
}

export default MobileBlock