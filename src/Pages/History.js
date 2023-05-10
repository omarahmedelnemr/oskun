import React, { useEffect, useState } from 'react';
import './styles/Home.css'
import HomeCard from '../components/Card';
import Navbar from '../components/navbar';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import BackendLink from '../backendLink';
function HistoryPage() {
    const tokenData = jwtDecode(localStorage.getItem('jwt'))
    
    const [history,setHistory] = useState([])    
    useEffect(()=>{
        axios.get(`${BackendLink}/history?id=${tokenData.id}`).then((res)=>{
            console.log(res.data)
            if (res.data.message =='Done'){
                var tempCard = []
                const history = res.data.data
                for(var i=0;i<history.length;i++){
                    tempCard.push(<HomeCard 
                        propID={history[i].id} 
                        imgSrc={history[i].mainImg} 
                        location={history[i].location} 
                        name={history[i].name} 
                        price={history[i].price} 
                        rating={history[i].rating} 
                        beds={history[i].beds} 
                        baths={history[i].baths} 
                        size={history[i].size} 
                        fav={history[i].fav}
                        historyCardState={true}
                        startedat={history[i].history.startDate}
                        endedat={history[i].history.endDate}></HomeCard>)
                }
                setHistory(tempCard)
            }

        })
    },[])


    return (
        <div className='History'>
            <div className='top'>
                <Navbar></Navbar>
            </div>
            <div className='sectionTitle'>
                <h1>History</h1>
                <hr/>
            </div>
            <div className='offeredHouses'>
                {history}
            </div>

        </div>
    )
}

export default HistoryPage