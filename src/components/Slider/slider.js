import React, {useState} from 'react';
import {images} from'../Helpers/CarouselDate';
import'./slider.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from'@material-ui/icons/ArrowForwardIos';

function Carousel(){

    const[currImg, setCurrImg]= useState(0);
    return (
    <div className="carousel">
       
        <div className="carouselInner"
            style={{backgroundImage: `url(${images[currImg].img})`}}
        >
            <div className="left" onClick={()=>{
              currImg>0 &&  setCurrImg(currImg -1);
            }}>
                <ArrowBackIosIcon style={{ fontSize: 30}}/>
            </div>
            <div className="center">
                <h1 class="titulo">{images[currImg].title}</h1>
                <p class="descri">{images[currImg].subtitle}</p>
            </div>
            <div className="rigth" onClick={()=>{
                currImg < images.length -1 && setCurrImg(currImg +1);
            }}
            >
                <ArrowForwardIosIcon style={{ fontSize: 30}}/>
            </div>

        </div>
    </div>
    )
}

export default Carousel;