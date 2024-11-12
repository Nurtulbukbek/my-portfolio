import "../css/reviews.css"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        avatar: "../pelmor.png",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit amet eius.",
        name: "Pelmor"
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
                                    <div className="reviewSpot">
                                        <div className="customerAvatar">
                                            <img src={slideImage.avatar} alt="" className="customerPhoto" />
                                        </div>
                                        <div className="customerQuote">
                                            <div className="customerQuoteText">
                                                <p className="customerText">
                                                    "{slideImage.quote}"
                                                </p>
                                            </div>
                                            <div className="customerName">
                                                <p className="customerNick">
                                                    {slideImage.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))} 
                </Slide>
            </div>
            
        </>
    )
}

export default Reviews