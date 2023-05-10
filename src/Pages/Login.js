import React from 'react';
import './styles/Login.css'
import Button from '../components/Button';
import axios from 'axios';
import BackendLink from '../backendLink';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    // const navigate = useNavigate();

   const e =  document.getElementById('loginButton')
   console.log(e)
   const navigate = useNavigate();

    async function submit(){
        try{

            const email = document.getElementById("loginEmail").value
            const password = document.getElementById("loginPassword").value
            const res = await axios.post(`${BackendLink}/login`, {email:email,password:password})
            console.log("masssss ",res.data)
            if (res.data.message == "Done"){
                localStorage.setItem("jwt",res.data.token)
                navigate('/home');
            }else{
                document.getElementsByClassName("wrongMassege")[0].className = "wrongMassege massegeShow"

            }

        }catch{
            document.getElementsByClassName("wrongMassege")[0].className = "wrongMassege massegeShow"
            console.log("Not Found")
        }
   }

  return (
        <div id='Login'>
            <div id='LoginLeft'>
                <div id='WelcomeText'>


                </div>
            </div>
            <div id='LoginRight'>
                <div>
                    <a href='./home'><h1>OSKUN</h1></a>

                </div>
                <div className='loginNav'>
                </div>
                <form id='loginForm'>
                <p className='wrongMassege massegeHide'>Wrong Email or Password</p>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="text" id = "loginEmail" name ="email" placeholder=" "/>
                        <label>Email</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" id="loginPassword" name="password" placeholder=" "/>
                        <label>Passwrod</label>
                        <span class="focus-bg"></span>
                    </div>
                    <a href='/forgotpassword'>Forgot Password?</a>
                </form>
                <Button id = {"loginButton"} text={'Login'} onclick={()=>submit()}></Button>

                    <p>Don't Have an Account? <a href='/register'>Register</a></p>
            </div>

        </div>
  )
}

export default LoginPage