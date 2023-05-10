import React, { useEffect, useState } from 'react';
import './styles/Home.css'
import HomeCard from '../components/Card';
import Navbar from '../components/navbar';
import image from '../Content/login.jpg'
import axios from 'axios';
import BackendLink from '../backendLink';
import jwtDecode from 'jwt-decode';
function FavoritePage() {
    
    const [favCards,setFavCards] = useState([])
    const tokenData = jwtDecode(localStorage.getItem('jwt'))
    useEffect(()=>{
        axios.get(`${BackendLink}/favorite?id=${tokenData.id}`).then((res)=>{
            if (res.data.message == "Done"){

                var cards =[]
                const favorite = res.data.data
                for(var i=0;i<favorite.length;i++){
                    cards.push(<HomeCard 
                        propID={favorite[i].id} 
                        imgSrc={favorite[i].mainImg} 
                        location={favorite[i].location} 
                        name={favorite[i].name} 
                        price={favorite[i].price} 
                        rating={favorite[i].rating} 
                        beds={favorite[i].beds} 
                        baths={favorite[i].baths} 
                        size={favorite[i].size} 
                        fav={1}></HomeCard>)
                }

                setFavCards(cards)
            }
        })
    })
    // const favorite = [{
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
    //     fav:true
    // }]

    // var cards =[]
    // for(var i=0;i<favorite.length;i++){
    //     cards.push(<HomeCard 
    //         propID={favorite[i].id} 
    //         imgSrc={favorite[i].imgSrc} 
    //         location={favorite[i].location} 
    //         name={favorite[i].name} 
    //         price={favorite[i].price} 
    //         rating={favorite[i].rating} 
    //         beds={favorite[i].beds} 
    //         baths={favorite[i].baths} 
    //         size={favorite[i].size} 
    //         fav={favorite[i].fav}></HomeCard>)
    // }
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
                {favCards}
            </div>

        </div>
    )
}

export default FavoritePage