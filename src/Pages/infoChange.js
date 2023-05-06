import React, { useEffect } from 'react';
import './styles/profile.css'
import './styles/Login.css'
import Navbar from '../components/navbar';
function InfoChange() {
    const userData = {
        name:"omar ahmed",
        imgDir:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg",
        email:"email@gmail.com",
        phoneNumber:"010011012",
        showNumber:true
    }
    useEffect(() => {
        // Initialization code comes here
    const elemnts = document.getElementsByClassName('effect-22')
    elemnts[0].value = userData.name
    elemnts[1].value = userData.email
    elemnts[2].value = userData.phoneNumber

    }, []);
  return (
        <div id='Profile'>
            <Navbar></Navbar>
            <div className='user'>
                <div>
                <img src={userData.imgDir}/>

                </div>
                <div className='userInfo'>
                    <div class="col-3 input-effect">
                        <input  class="effect-22" type="text" placeholder=" "/>
                        <label>Name</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input  class="effect-22" type="email" placeholder=" "/>
                        <label>Email</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input  class="effect-22" type="text" placeholder=" "/>
                        <label>Phone Number</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div className='row'>
                        <a href="/profile/">Submit</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default InfoChange