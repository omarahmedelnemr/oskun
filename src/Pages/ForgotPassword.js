import React, { useState } from 'react';
import './styles/Login.css'
import Button from '../components/Button';
import BackendLink from '../backendLink';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function ForgotPassword() {
    // const [email,setEmail] = useState('')
    const navigate = useNavigate();
    var email =''
    const [currentForm,setCurrentForm] = useState(
            <div>
                <div class="col-3 input-effect">
                    <input class="effect-22" type="email" id = 'emailConf' placeholder=" "/>
                    <label>Email</label>
                    <span class="focus-bg"></span>
                </div>
                <Button text={'Send Confirmation'} onclick={emailClick}></Button>
            </div>)
    function emailClick(){
        // setEmail(document.getElementById('emailConf').value)
        email = document.getElementById('emailConf').value
        document.getElementById('emailConf').value =''
        setCurrentForm('')
        setCurrentForm(
            <div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" id = 'newPass' placeholder=" "/>
                        <label>New Password</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" id = 'renewPass' placeholder=" "/>
                        <label>Rewrite New Password</label>
                        <span class="focus-bg"></span>
                    </div>
                    <Button text={'Change'} onclick={passChange}></Button>
                
            </div>
        )
    }
    async function passChange(){
        console.log("Hello")

            const pass = document.getElementById('newPass').value
            const repass =document.getElementById('renewPass').value
            console.log( document.getElementsByClassName('wrongMassege')[0])

            if (pass!=repass){
                document.getElementsByClassName('wrongMassege')[0].innerHTML = 'password is Not Matched'
                console.log( document.getElementsByClassName('wrongMassege')[0].text)

            }else{
                document.getElementsByClassName('wrongMassege')[0].innerHTML = ''
                await axios.post(`${BackendLink}/updatepassword`,{email:email,password:pass})
                navigate('/login')
            }
    }
  return (
        <div id='Login'>
            <div id='LoginRight' className='Center'>
                <div>
                <a href='./home'><h1>OSKUN</h1></a>
                    {/* <h3>The First Renting Provider App in Borg El-Arab City</h3> */}

                </div>
                <p className='wrongMassege'></p>
                {currentForm}
                {/* <form>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" id = 'newPass' placeholder=" "/>
                        <label>New Password</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" id = 'renewPass' placeholder=" "/>
                        <label>Rewrite New Password</label>
                        <span class="focus-bg"></span>
                    </div>
                    <Button text={'Change'} onclick={passChange}></Button>
                
                </form> */}
                <p>Create New Account? <a href='/register'>Register</a></p>
            </div>

        </div>
  )
}

export default ForgotPassword