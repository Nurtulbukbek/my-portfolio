import "../css/reviews.css"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: "../review1.png",
    },
    {
        url: "../review1.png",
    },
];

function Reviews() {

    return(
        <>
            <div className="container">
                <div className="reviewsPart">
                    <div className="textReviews">
                        <h3 className="reviewsh3">
                            Reviews
                        </h3>
                        <h1 className="reviewsh1">
                            Customer's Reviews
                        </h1>
                    </div>
                </div>
                <Slide>
                        {slideImages.map((slideImage, index)=> (
                            <div key={index}>
                                <div className='slider'>
                                    <img src={slideImage.url} alt="" />
                                </div>
                            </div>
                        ))} 
                </Slide>
            </div>
            
        </>
    )
}

export default Reviews