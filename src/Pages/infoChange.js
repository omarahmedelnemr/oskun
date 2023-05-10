import React, { useEffect } from 'react';
import './styles/profile.css'
import './styles/Login.css'
import Navbar from '../components/navbar';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import BackendLink from '../backendLink'
import { useNavigate } from 'react-router-dom';
function InfoChange() {
    const navigate = useNavigate()
    const token = jwtDecode(localStorage.getItem('jwt'))
    const userData = {
        name:token.name,
        imgDir:token.imgDir,
        email:token.email,
        phoneNumber:token.phoneNumber,
        showNumber:true
    }

    function submitChange(){
        const data = {
            "id":token.id,
            "name":document.getElementById("changeName").value,
            "email":document.getElementById("changeEmail").value,
            "phoneNumber":document.getElementById("changePhone").value,
        }
        axios.post(`${BackendLink}/updateuser`,data).then((res)=>{
            if (res.data.message =="Done"){
                console.log("Done")
                localStorage.removeItem('jwt')
                navigate('/login')
            }else{
                console.log(res.data.message)
            }
        })
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
                        <input id ="changeName" class="effect-22" type="text" placeholder=" "/>
                        <label>Name</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input id="changeEmail" class="effect-22" type="email" placeholder=" "/>
                        <label>Email</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input id='changePhone'  class="effect-22" type="text" placeholder=" "/>
                        <label>Phone Number</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div className='row'>
                        <a onClick={submitChange}>Submit</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default InfoChange