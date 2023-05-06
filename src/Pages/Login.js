import React from 'react';
import './styles/Login.css'
import Button from '../components/Button';
function LoginPage() {
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
                    <h1>OSKUN</h1>

                </div>
                <div className='loginNav'>
                </div>
                <form>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="text" placeholder=" "/>
                        <label>Email</label>
                        <span class="focus-bg"></span>
                    </div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="password" placeholder=" "/>
                        <label>Passwrod</label>
                        <span class="focus-bg"></span>
                    </div>
                    <a href='/forgotpassword'>Forgot Password?</a>
                    <Button text={'Login'}></Button>
                </form>
                    <p>Don't Have an Account? <a href='/register'>Register</a></p>
            </div>

        </div>
  )
}

export default LoginPage