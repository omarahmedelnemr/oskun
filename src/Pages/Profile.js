import React, { useEffect, useState } from 'react';
import './styles/profile.css'
import Navbar from '../components/navbar';
import jwt_decode from 'jwt-decode' // import dependency
import axios from 'axios';
import BackendLink from '../backendLink';

function ProfilePage() {
    const token = jwt_decode(localStorage.getItem('jwt'))
    console.log(token)
    const [userData,setUserData] = useState(token)
    useEffect(()=> {
        axios.get(`${BackendLink}/profile?id=${token.id}`).then((res)=>{
            console.log(res.data.message)
            if (res.data.message == 'Done'){
                setUserData(res.data.data)
            }
        })
    },[])
    // const userData = {
    //     name:"omar ahmed",
    //     imgDir:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg",
    //     email:"email@gmail.com",
    //     phoneNumber:"010011012",
    //     showNumber:true
    // }
  return (
        <div id='Profile'>
            <Navbar></Navbar>
            <div className='user'>
                <div>
                <img src={userData.imgDir}/>

                </div>
                <div className='userInfo'>
                    <p className='fieldTitle'>Name</p>
                    <h1>{userData.name}</h1>
                    <p className='fieldTitle'>Email</p>
                    <h3>{userData.email}</h3>
                    <p className='fieldTitle'>phoneNumber</p>
                    <h3>{userData.phoneNumber}</h3>
                    <div className='row'>
                        <a href="/profile/change">ChangeInfo</a>
                        <a href="/profile/passwordChange">ChangePassword</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProfilePage