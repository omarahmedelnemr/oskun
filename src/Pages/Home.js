import React, { useEffect, useState } from 'react';
import './styles/Home.css'
import './styles/loadingScreen.css'
import HomeCard from '../components/Card';
import Navbar from '../components/navbar';
import image from '../Content/login.jpg'
import BackendLink from '../backendLink';
import axios from 'axios';
function HomePage() {
    
    const [cards,setCards] = useState([])
    const [load,setLoad] = useState(1)
    
    useEffect(()=>{
        axios.get(`${BackendLink}/AvailableHouses`).then((res)=>{
            if (res.data.message =='Done'){
                var tempCard = []
                const available = res.data.data
                for(var i=0;i<available.length;i++){
                    tempCard.push(<HomeCard 
                        propID={available[i].id} 
                        imgSrc={available[i].mainImg} 
                        location={available[i].location} 
                        name={available[i].name} 
                        price={available[i].price} 
                        rating={available[i].rating} 
                        beds={available[i].beds} 
                        baths={available[i].baths} 
                        size={available[i].size} 
                        fav={available[i].fav}></HomeCard>)
                }
                setCards(tempCard)
                setLoad(0)
            }

        })
    },[])
    useEffect( ()=>{
        if(load==1){            
            console.log("Loading ....")

        }else{
            document.getElementsByClassName("loadingScreen")[0].style.opacity =0
            document.getElementsByClassName("loadingScreen")[0].style.height  = 0

        }
    })
    return (
        <div className='Home'>
            <div className='loadingScreen'>
                <div></div>
            </div>
            <div className='top'>
                <Navbar></Navbar>
            </div>
            <div className='homeImage'>
                <h1>First Renting System in Borg El-Arab City</h1>
            </div>
            <div className='sectionTitle'>
                <h1>Available Houses</h1>
                <hr/>
            </div>
            <div className='offeredHouses'>
                {cards}
            </div>

        </div>
    )
}

export default HomePage