import React from 'react';
import './styles/profile.css'
import './styles/Login.css'
import Navbar from '../components/navbar';
import Button from '../components/Button';
import axios from 'axios';
import BackendLink from '../backendLink';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function PasswordChange() {
    const navigate = useNavigate()
    const token = jwt_decode(localStorage.getItem('jwt'))
    const userData = {
        name:token.name,
        imgDir:token.imgDir,
        email:token.email,
        phoneNumber:token.phoneNumber,
        showNumber:true
    }
    async function change(){
        const inputs = document.getElementsByTagName("input")
        console.log(inputs)
        const token = localStorage.getItem("jwt")
        const userData = jwt_decode(token)

        // const oldPassword = inputs[1].value
        const newPassword = inputs[1].value
        const reNewPassword = inputs[2].value
        console.log(newPassword)
        console.log(reNewPassword)
        console.log(newPassword==reNewPassword)
        if (newPassword ==reNewPassword){
            document.getElementsByClassName("wrongMassege")[0].innerHTML = ''
            try{
                const res = await axios.post(`${BackendLink}/changePassword`, {email:userData.email,newPassword:newPassword})
                if (res.data.message == "Done"){
                    navigate('/profile')
                }
            }catch{
            document.getElementsByClassName("wrongMassege")[0].innerHTML = 'old Password Not Correct'
                
            }


        }else{
            document.getElementsByClassName("wrongMassege")[0].innerHTML = 'Wrong Match'
        }
    }
  return (
        <div id='Profile'>
            <Navbar></Navbar>
            <div className='user'>
                <div>
                <img src={userData.imgDir}/>

                </div>
                
                <div className='userInfo'> 
                <p className='wrongMassege'></p>
                    {/* <div class="col-3 input-effect">
                        <input class="effect-22" type="password" placeholder=" "/>
                        <label>old Password</label>
                        <span class="focus-bg"></span>
                    </div> */}
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
                        <button onClick={change}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PasswordChange