import React, { useEffect, useState } from 'react';
import './styles/Home.css'
import HomeCard from '../components/Card';
import Navbar from '../components/navbar';
import image from '../Content/login.jpg'
import BackendLink from '../backendLink';
import axios from 'axios';
function HomePage() {
    
    const [cards,setCards] = useState([])

    
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
            }

        })
    },[])
    // const available = [{
    //     id:12,
    //     imgSrc:image,
    //     location:"First Distrect",
    //     name:"Vella Ahmed",
    //     price:4000,
    //     rating:3.0,
    //     beds:4,
    //     baths:2,
    //     size:400,
    //     fav:true
    // },
    // {
    //     id:10,
    //     imgSrc:image,
    //     location:"First Distrect",
    //     name:"Vella Ahmed",
    //     price:4000,
    //     rating:3.0,
    //     beds:4,
    //     baths:2,
    //     size:400,
    //     fav:false
    // },
    // {
    //     id:9,
    //     imgSrc:image,
    //     location:"First Distraaect",
    //     name:"Vella Ahmed",
    //     price:4000,
    //     rating:3.0,
    //     beds:4,
    //     baths:2,
    //     size:400,
    //     fav:false
    // }]

    // var cards =[]
    // for(var i=0;i<available.length;i++){
    //     cards.push(<HomeCard 
    //         propID={available[i].id} 
    //         imgSrc={available[i].imgSrc} 
    //         location={available[i].location} 
    //         name={available[i].name} 
    //         price={available[i].price} 
    //         rating={available[i].rating} 
    //         beds={available[i].beds} 
    //         baths={available[i].baths} 
    //         size={available[i].size} 
    //         fav={available[i].fav}></HomeCard>)
    // }

    return (
        <div className='Home'>
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