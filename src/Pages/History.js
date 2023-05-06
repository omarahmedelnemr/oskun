import React, { useEffect, useState } from 'react';
import './styles/Home.css'
import rentAnimation from '../Content/rentanimation.jpg'
import Button from '../components/Button';
import HomeCard from '../components/Card';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchBar';
import image from '../Content/login.jpg'
import Homeimg from '../Content/Home.jpg'
import BackendLink from '../backendLink';
import axios from 'axios';
function HistoryPage() {
    
    // const [history,setHistory] = useState([])    
    // useEffect(()=>{
        // axios.get(`${BackendLink}/home`).then((res)=>{
        //     setHistory(res)
        // })
    // })
    const history = [{
        id:12,
        imgSrc:image,
        location:"First Distrect",
        name:"Vella Ahmed",
        price:4000,
        rating:3.0,
        beds:4,
        baths:2,
        size:400,
        fav:true
    },
    {
        id:10,
        imgSrc:image,
        location:"First Distrect",
        name:"Vella Ahmed",
        price:4000,
        rating:3.0,
        beds:4,
        baths:2,
        size:400,
        fav:true
    }]

    var cards =[]
    for(var i=0;i<history.length;i++){
        cards.push(<HomeCard 
            propID={history[i].id} 
            imgSrc={history[i].imgSrc} 
            location={history[i].location} 
            name={history[i].name} 
            price={history[i].price} 
            rating={history[i].rating} 
            beds={history[i].beds} 
            baths={history[i].baths} 
            size={history[i].size} 
            fav={history[i].fav}
            historyCardState={true}
            startedat={history[i].startedat}
            endedat={history[i].endedat}></HomeCard>)
    }
    return (
        <div className='History'>
            <div className='Mobile_app_offer'>
                <h2>Hello,</h2>
                <h3>Thanks For Visiting OSKUN</h3>
                <p>But unfortunatly the website Didn't  Provide the Best Experince For Mobile User, You Can Try Our App on GooglePlay or AppStore</p>
            </div>
            <div className='top'>
                <Navbar></Navbar>
            </div>
            <div className='sectionTitle'>
                <h1>History</h1>
                <hr/>
            </div>
            <div className='offeredHouses'>
                {cards}
            </div>

        </div>
    )
}

export default HistoryPage