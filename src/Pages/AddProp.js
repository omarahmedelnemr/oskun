import React from 'react';
import './styles/Login.css'
import './styles/addProp.css'

import Navbar from '../components/navbar';
function AddProp() {
    


    return (
        <div id='addProp'>
            <Navbar></Navbar>
            <form>
                <p id='fromTitle'>New Property</p>
                <div className='row'>
                        <div class="col-3 input-effect">
                            <input class="effect-22" type="text" placeholder=" "/>
                            <label>Name</label>
                            <span class="focus-bg"></span>
                        </div>

                    </div>
                    <div className='row'>
                        <div class="col-3 input-effect">
                            <input class="effect-22" type="text" placeholder=" "/>
                            <label>Location</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input class="effect-22" type="number" placeholder=" "/>
                            <label>Price per Month</label>
                            <span class="focus-bg"></span>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-3 input-effect">
                            <input class="effect-22" type="text" placeholder=" "/>
                            <label>Desctiption</label>
                            <span class="focus-bg"></span>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-3 input-effect">
                            <input class="effect-22" type="number" placeholder=" "/>
                            <label>beds</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input class="effect-22" type="number" placeholder=" "/>
                            <label>baths</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input class="effect-22" type="number" placeholder=" "/>
                            <label>rooms</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input class="effect-22" type="number" placeholder=" "/>
                            <label>size (m x m)</label>
                            <span class="focus-bg"></span>
                        </div>
                    </div>
                    
                    <div className='selectRow'>
                        <div class="col-3 input-effect select">
                            <p>Type:</p>
                            <div>
                                <input type="radio" id="vella" name="type" value="ella" />
                                <label for="type">Vella</label><br />
                                <input type="radio" id="appartment" name="type" value="appartment" />
                                <label for="type">Appartment</label><br />  
                            </div>
                        </div>
                        <div class="col-3 input-effect select">
                            <p>Cash:</p>
                            <div>
                                <input type="radio" id="cashYes" name="cash" value="yes" />
                                <label for="cash">Yes</label><br />
                                <input type="radio" id="cashNo" name="cash" value="no" />
                                <label for="cash">No</label><br />  
                            </div>
                        </div>
                        <div class="col-3 input-effect select">
                            <p>Rent Availability:</p>
                            <div>
                                <input type="radio" id="day" name="rentType" value="day" />
                                <label for="rentType">Pay by Days</label><br />
                                <input type="radio" id="week" name="rentType" value="week" />
                                <label for="rentType">Pay by Weeks</label><br />  
                                <input type="radio" id="month" name="rentType" value="month" />
                                <label for="rentType">Pay by Month</label><br />  
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type='file' multiple onChange={console.log("hello")}/>
                    </div>

                    <input type='submit' />


            </form>
        </div>
    )
}

export default AddProp