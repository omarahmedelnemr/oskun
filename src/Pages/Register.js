import React from 'react';
import './styles/Login.css'
import rentAnimation from '../Content/rentanimation.jpg'
import Button from '../components/Button';
function RegisterPage() {
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
                <form>
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
                    <Button text={'Register'}></Button>
                
                </form>
                    <p>Already Have an Account? <a href='/login'>Login</a></p>
            </div>

        </div>
  )
}

export default RegisterPage