import React from 'react';
import './styles/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomeCard({propID,imgSrc,location,name,price,rating,beds,baths,size,booked,fav,historyCardState,startedat,endedat}) {
    var dispalyState;
    if (booked == true){
        dispalyState = 'flex'
    }else{
        dispalyState = 'none'
    }
    var heart;
    if(fav){
        heart =<FontAwesomeIcon icon="fa-solid fa-heart" />
    }else{
        heart = <FontAwesomeIcon icon="fa-regular fa-heart" />
    }
    var historyCardInfo;
    if (historyCardState){
        historyCardInfo =      
        <div className='History' style={{display:historyCardState}}>
            <p>Started at:{startedat}</p>
            <p>Ended at:{endedat}</p>
        </div>
    }

  return (
        <div className='card'>
            <div className='isBooked' style={{display:dispalyState}}><p>Booked</p></div>
            <a href={`/prop/${propID}`}></a>
            <img src={imgSrc}/>
            <div className='upperInfo'>
                <div className='cardLocation'>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                    <p>{location}</p>
                </div>
                <div className='add_to_avorite'>
                    {heart}
                </div>
            </div>
            <div className='cardInfo'>
                <div>
                    <p className='cardName'>{name}</p>
                    <p className='cardPrice'>{price}LE/month</p>
                </div>
                <div className='Rating'>
                    <FontAwesomeIcon icon="fas fa-star" />
                    <p>{rating}</p>
                </div>
            </div>
            {historyCardInfo}
            <div className='cardFeatures'>
                <div className='Feature'>
                    <FontAwesomeIcon icon="fas fa-bed" />
                    <p>{beds} beds</p>
                </div>
                <div className='Feature'>
                <FontAwesomeIcon icon="fa-solid fa-bath" />
                    <p>{baths} baths</p>
                </div>
                <div className='Feature'>
                <FontAwesomeIcon icon="fa-solid fa-maximize" />
                    <p>{size} m<span>2</span></p>
                </div>
            </div>

        </div>
  )
}

export default HomeCard