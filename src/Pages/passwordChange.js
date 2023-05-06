import React from 'react';
import './styles/profile.css'
import './styles/Login.css'
import rentAnimation from '../Content/rentanimation.jpg'
import Button from '../components/Button';
import Navbar from '../components/navbar';
function PasswordChange() {
    const userData = {
        name:"omar ahmed",
        imgDir:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg",
        email:"email@gmail.com",
        phoneNumber:"010011012",
        showNumber:true
    }
  return (
        <div id='Profile'>
            <Navbar></Navbar>
            <div className='user'>
                <div>
                <img src={userData.imgDir}/>

                </div>
                <form className='userInfo'> 
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" placeholder=" "/>
                        <label>old Password</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" placeholder=" "/>
                        <label>new Password</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" placeholder=" "/>
                        <label>Rerite New Password</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div className='row'>
                        <a href="/profile/">Submit</a>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default PasswordChange