import React, {  useEffect, useState } from 'react';
import './styles/propInfo.css'
import {  useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/navbar';
import axios from 'axios';
import BackendLink from '../backendLink';


function PropInfoPage() {

    function replaceCurrent(e){
        document.getElementsByClassName("active")[0].className = 'smallImg'
        e.target.className = 'smallImg active'
        document.getElementById("currentimg").src = e.target.src
    }
    function calculateTimeData(e){
        const start =  document.getElementById("startAt").value
        const end = document.getElementById("endAt").value
        const date1 = new Date(start);
        const date2 = new Date(end);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDays(diffDays)
    }

    const propID = useParams().propID
    const [days,setDays] = useState('-')
    const [data,setData] = useState([])
    const [mainImg,setMainImg] = useState('')
    const [smallImgList,setSmallImgList] = useState([])
    useEffect(()=>{
        axios.get(`${BackendLink}/HouseDetails?id=${propID}`).then((res)=>{
            console.log(res.data)
            console.log("Images: ",res.data.data.images)
            if (res.data.message =='Done'){
                    setData(res.data.data)
                    setMainImg(<img src={res.data.data.mainImg} id='currentimg'/>)
                    var tempsmallImgList = [<img src={res.data.data.mainImg} className='smallImg active' onClick={replaceCurrent}/>]
                    for(var i=0;i<res.data.data.images.length;i++){
                        tempsmallImgList.push(<img src={res.data.data.images[i].imageDirectory} className='smallImg' onClick={replaceCurrent}/>)
                    }
                    setSmallImgList(tempsmallImgList)
            }

        })
    },[])
    // const data = {
    //     id:10,
    //     type:'vella',
    //     name:"Vella Ahmed",
    //     location:"First Distrect",
    //     publishDate:"12/12/2022",
    //     price:4000,
    //     desctiption:"this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home this is home",
    //     rating:3.1,
    //     beds:4,
    //     baths:2,
    //     cash:false,
    //     size:400,
    //     dayRent:false,
    //     weekRent:false,
    //     monthRent:true,
    //     mainImg:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg",
    //     images:[
    //         {
    //             imageDirectory:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg"
    //         },
    //         {
    //             imageDirectory:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg"
    //         },
    //         {
    //             imageDirectory:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg"
    //         },
    //         {
    //             imageDirectory:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg"
    //         },
    //         {
    //             imageDirectory:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg"
    //         }
    //     ],
    //     owner:{
    //         name:"omar ahmed",
    //         imgDir:"https://www.propertyfinder.eg/blog/wp-content/uploads/2021/09/New_Borg_El_Arab_city_collection-800x450.jpeg",
    //         email:"email@gmail.com",
    //         phoneNumber:"010011012",
    //         showNumber:true
    //     }
    // }

    return (
        <div className=''>

        <Navbar></Navbar>

        <div className='propDetails'>
            <div className='imgShow'>
                {mainImg}
                <div className='imgList'>
                        {smallImgList}

                </div>
            </div>
            <div className='propInfo'>
                <div className='Details'>
                    <p className='name'>{data.name}<span className='propType'>{data.type}</span></p>                    
                    <p>Published: {data.publishDate}</p>
                    <div className='row'>
                        <p className='location'><FontAwesomeIcon icon="fa-solid fa-location-dot" /> {data.location}</p>
                        <p className='rating'><FontAwesomeIcon icon="fa-solid fa-star" /> {data.rating}</p>
                    </div>  
                    <p className='description'>{data.description}</p>

                    <div className='Features'>
                        <div className='Feature'>
                            <FontAwesomeIcon icon="fas fa-bed" />
                            <p>{data.beds} beds</p>
                        </div>
                        <div className='Feature'>
                        <FontAwesomeIcon icon="fa-solid fa-bath" />
                            <p>{data.baths} baths</p>
                        </div>
                        <div className='Feature'>
                        <FontAwesomeIcon icon="fa-solid fa-maximize" />
                            <p>{data.size} m<span>2</span></p>
                        </div>
                        <div className='Feature rentType'>
                        
                        <p>{data.dayRent ? <FontAwesomeIcon icon="fa-solid fa-check"/>:<FontAwesomeIcon icon="fa-solid fa-xmark"/>} Day Rent</p>
                        <p>{data.weekRent ? <FontAwesomeIcon icon="fa-solid fa-check"/>:<FontAwesomeIcon icon="fa-solid fa-xmark"/>} Week Rent</p>
                        <p>{data.monthRent ? <FontAwesomeIcon icon="fa-solid fa-check"/>:<FontAwesomeIcon icon="fa-solid fa-xmark"/>} Month Rent</p> 
                        </div>
                    </div>
                    <div className='row'>
 
                    </div>
                    {/* <div className='aboutOwner'>
                        <h2 className='name'>About Owner</h2>
                        <div className='subDiv'>
                            <div>
                                <img src={data.owner.imgDir}/>
                            </div>
                            <div>
                                <h3>{data.owner.name}</h3>
                                <p>{data.owner.email}</p>
                                <p>{data.owner.showNumber?data.owner.phoneNumber:''}</p>

                            </div>
                        </div>
                    </div> */}

                </div>
                <div className='checkout'>
                    <div className='row'>
                        <p className='price'>{data.price}LE/month</p>
                        <p className='cashAble'>cash is{data.cash? "":" Not"} avilable</p>
                    </div>
                    <div className='row'>
                        <div className='dateInput'>
                            <label>Start at</label>
                            <br></br>
                            <input type='date' id='startAt'/>

                        </div>
                        <div>
                            <label>End at</label>
                            <br></br>
                            <input type='date' id='endAt' onChange={calculateTimeData}/>

                        </div>
                    </div>

                    <div className='sumup'>
                        <div className='row'><p>Total Days Will Be</p><p>{days}</p></div>
                        <div className='row'><p>Day Price</p><p>{Math.ceil(data.price/30)+10} LE</p></div>
                        <div className='row'><p>OSKUN Fees</p><p>{days =='-'? "0": Math.abs(data.price - (Math.ceil(data.price/30)+10)*days) } LE</p></div>
                        <div className='row'><p>Total Price Will Be</p><p>{days =='-'? "0": (Math.ceil(data.price/30)+10)*days } LE</p></div>
                    </div>
                    <div className='row'>
                        <a href="/" className='checkoutButton'>checkout</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PropInfoPage