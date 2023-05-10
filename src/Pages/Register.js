import React from 'react';
import './styles/Login.css'
import Button from '../components/Button';
import axios from 'axios';
import BackendLink from '../backendLink';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
   const navigate = useNavigate();

    async function registerSubmit(){
        try{
            const inputs = document.getElementsByTagName('input')
            const data = {
                name:inputs[0].value,
                email:inputs[1].value,
                phonenumber:inputs[2].value,
                password:inputs[3].value,
            }

            const res = await axios.post(`${BackendLink}/register`,data)
            if (res.data.message == 'Done'){
                localStorage.setItem("jwt",res.data.token)
                navigate('/home');
            }else{
                document.getElementsByClassName("wrongMassege")[0].text = "Email Are Already in Use"
                document.getElementsByClassName("wrongMassege")[0].className = "wrongMassege massegeShow"
            }


        }catch{
            document.getElementsByClassName("wrongMassege")[0].className = "wrongMassege massegeShow"
        }
    }
  return (
        <div id='Login'>
            <div id='LoginLeft'>
                <div id='WelcomeText'>
                    {/* <h1>Welcome To <span>OSKUN</span></h1>
                    <h3>The First Renting Provider App in Borg El-Arab City</h3> */}

                </div>
            </div>
            <div id='LoginRight'>
                <div>
                <a href='./home'><h1>OSKUN</h1></a>
                </div>
                <form >
                    <p className='wrongMassege massegeHide'>We Face an Error</p>

                    <div class="col-3 input-effect">
                        <input class="effect-22" type="text" placeholder=" "/>
                        <label>Name</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="text" placeholder=" "/>
                        <label>Email</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="number" placeholder=" "/>
                        <label>Phone Number</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" placeholder=" "/>
                        <label>Password</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" placeholder=" "/>
                        <label>Confirm Passwrod</label>
                        <span class="focus-bg"></span>
                    </div>
                
                </form>
                    <Button text={'Register'} onclick={registerSubmit}></Button>
                    <p>Already Have an Account? <a href='/login'>Login</a></p>
            </div>

        </div>
  )
}

export default RegisterPage