import React from 'react';
import './styles/Login.css'
import rentAnimation from '../Content/rentanimation.jpg'
import Button from '../components/Button';
function ForgotPassword() {
  return (
        <div id='Login'>
            <div id='LoginRight'>
                <div>
                    <h1>OSKUN</h1>
                    {/* <h3>The First Renting Provider App in Borg El-Arab City</h3> */}

                </div>
                <div className='loginNav'>
                    {/* <Button text={'Login'}></Button> */}
                    {/* <div id='Hover'></div> */}
                </div>
                <form>
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="text" placeholder=" "/>
                        <label>Email</label>
                        <span class="focus-bg"></span>
                    </div>
                    <Button text={'Send Confirmation'}></Button>
                
                </form>
                    <p>Create New Account? <a href='/register'>Register</a></p>
            </div>

        </div>
  )
}

export default ForgotPassword