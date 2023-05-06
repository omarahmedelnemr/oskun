import React, { useEffect, useState } from 'react';
import './styles/Home.css'
import HomeCard from '../components/Card';
import Navbar from '../components/navbar';
import image from '../Content/login.jpg'
import BackendLink from '../backendLink';
import axios from 'axios';
function FavoritePage() {
    
    // const [favorite,setFavorite] = useState([])    
    // useEffect(()=>{
        // axios.get(`${BackendLink}/home`).then((res)=>{
        //     setFavorite(res)
        // })
    // })
    const favorite = [{
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
    for(var i=0;i<favorite.length;i++){
        cards.push(<HomeCard 
            propID={favorite[i].id} 
            imgSrc={favorite[i].imgSrc} 
            location={favorite[i].location} 
            name={favorite[i].name} 
            price={favorite[i].price} 
            rating={favorite[i].rating} 
            beds={favorite[i].beds} 
            baths={favorite[i].baths} 
            size={favorite[i].size} 
            fav={favorite[i].fav}></HomeCard>)
    }
    return (
        <div className='Favorite'>
            <div className='top'>
                <Navbar></Navbar>
            </div>
            <div className='sectionTitle'>
                <h1>Favorite Houses</h1>
                <hr/>
            </div>
            <div className='offeredHouses'>
                {cards}
            </div>

        </div>
    )
}

export default FavoritePage