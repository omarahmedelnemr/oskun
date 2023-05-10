import React from 'react';
import './styles/Login.css'
import './styles/addProp.css'

import Navbar from '../components/navbar';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import BackendLink from '../backendLink';
import { useNavigate } from 'react-router-dom';
function AddProp() {
    const tokenData = jwtDecode(localStorage.getItem('jwt'))
    const navigate = useNavigate()
    function submitAppProp(){
        
        var formData = {
            "owner":tokenData.id,
            "name":document.getElementById('addPropName').value,
            "location":document.getElementById('addPropLocation').value,
            "price":document.getElementById('addPropPrice').value,
            "description":document.getElementById('addPropDescription').value,
            "beds":document.getElementById('addPropBeds').value,
            "baths":document.getElementById('addPropBaths').value,
            "rooms":document.getElementById('addPropRooms').value,
            "size":document.getElementById('addPropSize').value,
            "mainImg":document.getElementById("addPropMainimg").value,
            "type":document.getElementById("vella").checked?"Vella":"Appartment",
            "cash":document.getElementById("cashYes").checked,
            "dayRent":document.getElementById("day").checked,
            "weekRent":document.getElementById("week").checked,
            "images":[
                {"imageDirectory":document.getElementById('addPropimg1').value},
                {"imageDirectory":document.getElementById('addPropimg2').value}
            ]
        }
        console.log(formData)
        axios.post(`${BackendLink}/addhouse`,formData).then((res)=>{
            if (res.data.message =="Done"){
                navigate('/home')
            }else{
                console.log("Somthing Went Wrong")
            }
        })
    }

    return (
        <div id='addProp'>
            <Navbar></Navbar>
            <div id='form'> 
                <p id='fromTitle'>New Property</p>
                <div className='row'>
                        <div class="col-3 input-effect">
                            <input id = "addPropName" class="effect-22" type="text" placeholder=" "/>
                            <label>Name</label>
                            <span class="focus-bg"></span>
                        </div>

                    </div>
                    <div className='row'>
                        <div class="col-3 input-effect">
                            <input id = "addPropLocation"class="effect-22" type="text" placeholder=" "/>
                            <label>Location</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input id = "addPropPrice"class="effect-22" type="number" placeholder=" "/>
                            <label>Price per Month</label>
                            <span class="focus-bg"></span>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-3 input-effect">
                            <input id = "addPropDescription" class="effect-22" type="text" placeholder=" "/>
                            <label>Desctiption</label>
                            <span class="focus-bg"></span>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-3 input-effect">
                            <input id ="addPropBeds" class="effect-22" type="number" placeholder=" "/>
                            <label>beds</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input id ="addPropBaths" class="effect-22" type="number" placeholder=" "/>
                            <label>baths</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input id ="addPropRooms" class="effect-22" type="number" placeholder=" "/>
                            <label>rooms</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input id ="addPropSize" class="effect-22" type="number" placeholder=" "/>
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
                        <div class="col-3 input-effect">
                            <input id ="addPropMainimg" class="effect-22" type="text" placeholder=" "/>
                            <label>Main Image Link</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input id ="addPropimg1" class="effect-22" type="text" placeholder=" "/>
                            <label>Another Image Link</label>
                            <span class="focus-bg"></span>
                        </div>
                        <div class="col-3 input-effect">
                            <input id ="addPropimg2" class="effect-22" type="text" placeholder=" "/>
                            <label>Another Image Link</label>
                            <span class="focus-bg"></span>
                        </div>

                    <input type='submit'  onClick={submitAppProp}/>


            </div>
        </div>
    )
}

export default AddProp